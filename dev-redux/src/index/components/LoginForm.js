import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../store/actions';

const actionCreators = {
  login: userActions.login  
};

class LoginForm extends Component {
  reduxTestFun = () => {    
    this.props.login('chanHyun');
  }

  render() {
    return (
      <button onClick={this.reduxTestFun}>
        login
      </button>
    )
  }
};

export default connect(undefined, actionCreators)(LoginForm);
