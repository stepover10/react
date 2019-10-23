import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import mobxStore from './store/actions';

const store = new mobxStore(); // 스토어 인스턴스를 만들고

ReactDOM.render(
    <Provider store={store}>
        <Header />
    </Provider>,
    document.getElementById('Header')
)

