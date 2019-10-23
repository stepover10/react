import React from 'react'
import ReactDOM from 'react-dom'
import Loadable from 'react-loadable';
import Layout from './Layout'


if (typeof window !== 'undefined') {
   Loadable.preloadReady().then(() => {
     ReactDOM.hydrate(<Layout/>, document.getElementById('app'))
   });
}