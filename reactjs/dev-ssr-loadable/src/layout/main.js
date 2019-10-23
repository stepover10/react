import React from 'react'
import ReactDOM from 'react-dom'
import { loadComponents } from  'loadable-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout'

const Main = (props) => (
    <Router>
        <Layout {...props} />
    </Router>
);

loadComponents().then(() => {
    render(
        <Main />,
        document.getElementById('root'),
    );
});