import create from 'zustand';
import useStoreDevTools from 'app.hooks/useStoreDevTools';
import useToken from 'app.hooks/useToken';

let storeTest: any = ((set, get) => ({
  data: {
    name: '11'
  },

  add: (newData) => {
    set((state) => {
      // state
      console.log('prevData', state.data);
      console.log('newData', newData);
      return {
        data : {
          ...state.testDataset,
          ...newData,
        }
      }
    })
  }
}));

/*
  storeTest = persist(storeTest, {
    name: '___test'
  })
*/

const useStoreTest = create(storeTest);
export default useStoreTest;

// dev tool
useStoreDevTools('store1', useStoreTest);
