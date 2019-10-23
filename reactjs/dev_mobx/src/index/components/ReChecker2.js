import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject( stores => ({
    result: stores.store.result,
}))
@observer class ReChecker2 extends Component{

    static defaultProps = {
        result: 'ii',
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