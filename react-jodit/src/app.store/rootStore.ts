import create from 'zustand';
import createContext from 'zustand/context';
import { useLayoutEffect } from 'react';
import { devtools } from 'zustand/middleware';
import { isTestEnvironment } from 'app.modules/environment';
import { useStoreIntoAPP } from './intoAPP/store.intoAPP';
import { useStorePageInfo } from './pageInfo/store.pageInfo';

export let store;

export let initialStoreState = {
  intoAPP: {},
  pageInfo: {
    currentPageType: ''
  }
};

const zustandContext = createContext<any>();

export const StoreProvider = zustandContext.Provider;
export const useStoreSSR = zustandContext.useStore;

export const initializeStore = (preloadedState = {}) => {
  const _create = (set, get) => {
    return {
      ...initialStoreState,
      ...preloadedState,

      ...useStoreIntoAPP(set),
      ...useStorePageInfo(set),
    };
  };

  // zustand devtools
  return isTestEnvironment ? create(devtools(_create)) : create(_create);
};

export function useCreateStore(initialState) {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(initialState);
  }

  // For CSR, always re-use same store.
  store = store ?? initializeStore(initialState);

  useLayoutEffect(() => {
    if (initialState && store) {
      store.setState({ ...initialState, ...store.getState() });
    }
  }, [initialState]);

  return () => store;
}
