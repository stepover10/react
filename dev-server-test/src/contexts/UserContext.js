import { createContext } from 'react';

const Context = createContext();

const {
  Provider:ContextProvider,
  Consumer:ContextConsumer
} = Context;

export {
  ContextProvider,
  ContextConsumer,
};
