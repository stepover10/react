import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'mobx-react';
import mobxStore from './store/actions';

const store = new mobxStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
)

