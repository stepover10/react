import { isTestEnvironment } from 'app.modules/environment';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const useStoreDevTools = (name, store) => {
  if (isTestEnvironment) {
    const { mountStoreDevtool } = require('simple-zustand-devtools');
    mountStoreDevtool(name, store);
  }
};

export default useStoreDevTools;
