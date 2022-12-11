export const useStorePageInfo =  (set) => {
  return {
    pageInfoPrefetch: (payload = {}) => {
      set((state) => ({
        ...state,
        pageInfo: payload
      }));
    }
  }
}