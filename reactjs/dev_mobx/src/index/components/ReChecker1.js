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