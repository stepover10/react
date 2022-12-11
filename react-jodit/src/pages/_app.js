import { useState } from 'react';
import Head from 'next/head';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { parseCookies } from 'nookies';
import {
  initializeStore,
  useCreateStore,
  StoreProvider,
} from 'app.store/rootStore';
import AppWeb from 'app.layout/AppWeb';
import { appConfig } from 'app.modules/config/appConfig';

const queries = {
  retry: false,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchIntervalInBackground: false,
};

const env = process.env.COMMUNITY_PROJECT_NODE_ENV !== 'development';

const App = ({ Component, pageProps }) => {
  // const getUser = useStoreIntoAPP((state) => state.getUser);
  return <AppWeb contentsComponent={<Component {...pageProps} />} />;
};

const AppContainer = (props) => {
  const { pageProps } = props;

  const createStore = useCreateStore(pageProps.initialZustandState);

  const [clientQueryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries },
      })
  );

  return (
    <StoreProvider createStore={createStore}>
      <QueryClientProvider client={clientQueryClient}>
        <Head>
          <title>{appConfig.projectName}</title>
        </Head>
        {!env && <ReactQueryDevtools initialIsOpen={false} />}
        <Hydrate state={pageProps.dehydratedState}>
          <App {...props} />
        </Hydrate>
      </QueryClientProvider>
    </StoreProvider>
  );
};


AppContainer.getInitialProps = async ({ Component, ctx }) => {
  /* 안드로이드 5.x 버전 진입 불가 코드 */
  // if (ctx.res) {
  //   if (androidVersion5(ctx)) {
  //     ctx.res.writeHead(301, {
  //       Location: '/html/upgrade.html',
  //       'Content-Type': 'text/html; charset=utf-8',
  //     });
  //     return ctx.res.end();
  //   }
  // }

  const zustandStore = initializeStore();
  const zustandStoreGetState = zustandStore.getState();

  if (!!ctx.req) {
    if (ctx.req.method === 'POST') {
      const body = await parse(ctx.req);
      await zustandStoreGetState.intoAPPPrefetch(body);
    }

    /* __tests__local_debug */
    // if (processEnvApp === 'local' || processEnvApp === 'local-qa') {
    //   const { _testLocalServer } = require('app.modules/test/_testLocalServer');
    //   await _testLocalServer(ctx, zustandStore);
    // }
  }

  let pageGetInitialProps = {};

  if (Component.getInitialProps) {
    pageGetInitialProps = await Component.getInitialProps(ctx);
    zustandStoreGetState.pageInfoPrefetch(pageGetInitialProps.pageInfo);
  }

  return {
    pageProps: {
      ...pageGetInitialProps,
      initialZustandState: zustandStore.getState(),
    },
  };
};


export default AppContainer;
