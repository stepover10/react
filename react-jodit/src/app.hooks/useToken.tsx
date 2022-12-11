import {useStoreSSR} from 'app.store/rootStore';

export const useToken = () => {
  const getUser = useStoreSSR((state: any) => state.intoAPP);
  return getUser._ACCESS_TOKEN;
};

export default useToken;
