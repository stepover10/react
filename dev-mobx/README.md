> tutorial
: https://velog.io/@velopert


> **Mobx 사용시 체크해봐야 할것**
```
- Redux보다 간편하다
- 스토어를 개별적으로 관리하기가 더 좋다
```

> **server.js**
: 최상단 부모에다가 스토어를 연결
```javascript
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


```

> **actions.js**
```javascript
import {observable, action} from 'mobx';

export default class ActionStore {
    /*constructor(){
        this.result
    }*/
    
    @observable result

    @action increase = (params) => {
        console.log(params, 'increase')
        this.result = params
    }

    @action decrease = () => {
        console.log('decrease')
    }
    
}
```


> **inject/observer 보내기**
: Action를 보내는 역할
```javascript
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject( stores => ({
    increase: stores.store.increase,
}))
@observer
class ReChecker1 extends Component{

    mobxTestFun(i){
        this.props.increase('전달성공')
    }

    render(){
        return(
            <div onClick={ ()=>this.mobxTestFun('전달') }>
                ReChecker1
            </div>
        )
    }
}

export default ReChecker1
```


> **inject/observer 받기**
: Action를 받는 역할
```javascript
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject( stores => ({
    result: stores.store.result,
}))
@observer class ReChecker2 extends Component{

    static defaultProps = {
        result: 'ii', // actions.js에 result 변수에 값을 받는다
    }

    render(){
        // const { increase } = Store.increase()
        return(
            <div>
                {this.props.result}
            </div>
        )
    }
}

export default ReChecker2
```
