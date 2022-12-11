import { useQuery } from '@tanstack/react-query';
import API from 'app.modules/api';
import useToken from 'app.hooks/useToken';

const requestFn = async ({ url, data, access_token }) => {
  const response = await API.GET({
    url,
    data: {
      ...data,
      access_token,
    },
  });
  if (response.data.error) throw response.data.error;
  return response.data.result;
};

const getQueryKeyFn = (queryKeys) => {
  const url = Array.isArray(queryKeys) ? queryKeys[0] : queryKeys;
  const data = Array.isArray(queryKeys) ? queryKeys[1] : null;
  return {
    url,
    data,
  };
};

const useQueryFn = (queryKeys, options = {}) => {
  const access_token = useToken();
  const { url, data } = getQueryKeyFn(queryKeys);

  return useQuery(
    queryKeys,
    async () =>
      requestFn({
        url,
        data,
        access_token,
      }),
    {
      enabled: !!queryKeys,
      // onError: (err) => {
        // toast.alert('예기치 못한 에러가 발생했습니다.');
      // },
      ...options,
    }
  );
};

export default useQueryFn;
