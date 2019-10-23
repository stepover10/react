import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import loadable from 'loadable-components';

const AlbumPage = loadable(() => import('../pages/home/Home'));
const HomePage = loadable(() => import('../pages/about/About'));


export default class Layout extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
            <Switch>
              <Route exact path="/" component={AlbumPage} />
              <Route path="/about" component={HomePage} />
            </Switch>
        </div>
    )
  }
}