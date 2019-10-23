> tutorial
: http://beomy.tistory.com/35


> **Redux 사용시 체크해봐야 할것**
```
- 스토어를 개별적으로 사용할건지 전체에서 관리 할것인지 (경험으로는 페이지마다 개별 관리가 용이)
- dumb component 경우 defaultProps를 필수적으로 선언
```

> **server.js**
: 최상단 부모에다가 스토어를 연결
```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'

import { createStore } from 'redux'
import reducers from './store/reducers'
import { Provider } from 'react-redux'

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Header />
    </Provider>,
    document.getElementById('Header')
)
```

> **Acrion.js**
```javascript
export function userData(params) {
    return {
        action: 'USER_DATA',
        type: params
    };
}

export function userAction(params) {
    return {
        action: 'USER_ACTION',
        type: params
    };
}
```

> **Reducer.js**
```javascript
import { combineReducers } from 'redux'

const reduxDataProps = (state=[], action) =>{
    if( 'USER_DATA' === action.action ){
        return Object.assign({}, state, {
            userStatus: action.type
        })
    }

    if( 'USER_ACTION' === action.action ){
        return Object.assign({}, state, {
            userAction: action.type
        });
    }

    return state
}

const campaignStepApp = combineReducers({ reduxDataProps })
export default campaignStepApp
```


> **mapDispatchToProps**
: Action를 보내는 역할
```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../store/actions'

class ReChecker1 extends Component{
    reduxTestFun(){
        this.props.userAction('전달성공')
    }

    render(){
        return(
            <div onClick={this.reduxTestFun.bind(this)}>
                ReChecker1
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userAction: (a,b) => dispatch( userAction(a,b) ),
    }
}

ReChecker1 = connect(undefined, mapDispatchToProps)(ReChecker1);
export default ReChecker1
```


> **mapStateToProps**
: Action를 받는 역할
```javascript
import React, { Component } from 'react';
import {connect} from "react-redux";

/* props 전달받을 Component에 연결 함수 */
class ReChecker2 extends Component{
    render(){
        return(
            <div>
                {this.props.userAction}
            </div>
        )
    }
}

ReChecker2.defaultProps = {
    userAction: 'stranger'
}

const mapStateToProps = (state) => {
    return {
        userAction: state.reduxDataProps.userAction,
    };
}

ReChecker2 = connect(mapStateToProps)(ReChecker2);
export default ReChecker2
```

> **흐름**

![redux](img/reduxMap.png)
