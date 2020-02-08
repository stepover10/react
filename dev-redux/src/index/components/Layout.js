import React, { Component } from 'react';
import { connect } from "react-redux";
import { userActions } from "../store/actions";

const storeProps = (authentication) => {
  const { loggingIn, user } = authentication.authentication || null;
  return { 
    loggingIn,
    user
  }
}

const actionCreators = {
  logout: userActions.logout
}

class Layout extends Component {
  state = {}
  render() {
    console.log("Layout : ", this.props)
    return (
      <div>        
        LAYOUT VIEW!!
        <br/>
        <button onClick={this.props.logout}>LOGOUT</button>
      </div>
    )
  }
}

export default connect(storeProps, actionCreators)(Layout);