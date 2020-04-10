import React, { Component } from 'react';
import ReChecker1 from './ReChecker1'
import ReChecker2 from './ReChecker2'

export default class Header extends Component{
    componentDidMount() {
        const testConst = 'test'
    }

    render(){
        return(
            <div>
                <ReChecker1 />
                <ReChecker2 />
            </div>
        )
    }
}