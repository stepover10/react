import axios from "axios";

export const graphqlFetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables,
  options?: RequestInit['headers']
): (() => Promise<TData>) => {
  return async () => {
    const res = await axios.post(

      'https://xen-api.lnkr.cc/graphql',

      JSON.stringify({
        query,
        variables,
      }),
      {
        // @ts-ignore // 오류나면  options?:AxiosRequestHeaders & RequestInit['headers']
        headers: {
          'Content-Type': 'application/json',
          ...options,
        },
      }
    );
    return res.data.data;
  };
};
