import React, { Component } from 'react';
import {connect} from "react-redux";

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