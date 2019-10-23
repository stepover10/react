import * as React from 'react';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer class ReChecker2 extends React.Component<{store?:any}, any>{

    static defaultProps = {
        result: 'ii',
    }

    render(){    
        console.log(this.props.store)
        return(
            <div>
                
            </div>
        )
    }
}

export default ReChecker2