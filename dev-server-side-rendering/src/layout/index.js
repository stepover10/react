// in src/client/index.js
import { loadComponents } from  'loadable-components';
import { render } from 'react-dom';
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