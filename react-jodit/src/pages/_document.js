import React from 'react';
import Document, { Html, Main, Head, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from '../app.styled';
// import MetaTagDocument from 'app.components/meta/MetaTagDocument';
import { processEnvApp } from "app.modules/environment";

class _AppDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <App {...props} />
              </>
            ),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/*<MetaTagDocument />*/}
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

          {this.props.styleTags}
          {/*<link rel="stylesheet" type="text/css" href="/css/font.css" />*/}
        </Head>
        <body data-env={processEnvApp}>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default _AppDocument;
