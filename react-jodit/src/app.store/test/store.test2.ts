import create from 'zustand';

let storeTest2: any = ((set, get) => ({
  data: {
    name: '11'
  },

  add: (newData) => {
    set((state) => {
      // state
      console.log('aa', state.data);
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

// dev tool
const useStoreTest2 = create(storeTest2);
export default useStoreTest2;

// const useStoreTest = useStoreDevTools(storeTest);
// export default useStoreTest;
