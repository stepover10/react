import * as React from 'react';
import App from 'containers/App';
import './index.scss';

export default class Index extends React.Component<any> {

  static async getInitialProps({req}) {
    const userAgent1 = req ? req.headers['user-agent'] : navigator.userAgent;
    const userAgent2 = req ? req.headers['user-agent'] : navigator.userAgent;

    return { userAgent1, userAgent2 }
  }

  render() {
    return (
      <div id="BrowserRouter">
        <App/>
      </div>
    )
  }
}
