import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Expform extends Component {
    static propTypes = {
        expHeader: PropTypes.string.isRequired,
        expList: PropTypes.string.isRequired,
    };

    render() {
        const { expHeader, expList } = this.props;
        return (
            <div className="exp-detaile-wrap">
                <div className="exp-wrap-boy">
                    {expHeader}
                    {expList}
                </div>
            </div>
        );
    }
}
