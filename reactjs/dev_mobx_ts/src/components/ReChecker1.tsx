import * as React from 'react';
import { observer, inject } from 'mobx-react';

@inject( ({...stores}:any) => { 
    return { 
        increase: stores.store.increase 
    }; 
}) 
@observer class ReChecker1 extends React.Component<any, any>{

    mobxTestFun = () =>{
        this.props.increase(Math.random())
    }

    render(){       
        const { store } = this.props;
        return(
            <>
                <h1>{this.props.result}</h1>
                <div onClick={this.mobxTestFun}>
                    ReChecker1
                </div>
            </>
        )
    }
}

export default ReChecker1