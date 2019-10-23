import * as React from 'react';
import { observer, inject } from 'mobx-react';
import ReChecker1 from './ReChecker1'

@inject( ({...stores}:any) => { 
    return { 
        result: stores.store.result
    }; 
})
@observer class App extends React.Component<any, any>{  
    render(){
        console.log(this)
        return(
           <div>                         
                <ReChecker1 />                
                {this.props.result}
           </div>
        )
    }
}

export default App;