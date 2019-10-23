import ReactDOM from "react-dom";
import Layout from "../pages/Layout";

const app = document.getElementById( "app" );
ReactDOM.hydrate( <Layout />, app );