import React from 'react';

/*const HeaderMenu = ({init}) => {

    const sayHi = (params) => {
        console.log('send', params)
    }

    return(
        <div onClick={ sayHi('status') }>
            {init}
        </div>
    )

}*/


export default class HeaderMenu extends React.Component{

    state = {
        init : this.props.init
    }

    sayHi = (param) => (event) => {
       console.log(param, event)
    }

    render() {
        return(
          <div onClick={ this.sayHi('status') }>
            {this.props.init}
          </div>
        )
    }

}