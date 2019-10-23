import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncComponent1 = Loadable({
  loader: () => import("../pages/home/Home"),
  loading: () => <div>loading...</div>,
});

const AsyncComponent2 = Loadable({
  loader: () => import("../pages/about/About"),
  loading: () => <div>loading...</div>,
});


export default class Layout extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
            <Switch>
              <Route exact path="/" component={AsyncComponent1} />
              <Route path="/about" component={AsyncComponent2} />
            </Switch>
        </div>
    )
  }
}