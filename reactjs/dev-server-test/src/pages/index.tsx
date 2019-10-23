import * as React from 'react';
import App from 'containers/App';
import Link from 'next/link';
import './index.scss';

export default class Index extends React.Component<any> {

  static async getInitialProps({req}) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent }
  }

  render() {
    return (
      <div id="BrowserRouter">
        <App />
      </div>
    )
  }
}
