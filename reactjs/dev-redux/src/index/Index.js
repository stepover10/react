import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

import { createStore } from 'redux';
import reducers from './store/reducers';
import { Provider } from 'react-redux';

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Header />
    </Provider>,
    document.getElementById('Header')
)

