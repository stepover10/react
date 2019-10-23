import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import App from './src/App';
// import * as appName from './app.json';

AppRegistry.registerComponent('AwesomeProject', () => App);

if (window.document) {
  AppRegistry.runApplication('AwesomeProject', {
    initialProps: {},
    rootTag: document.getElementById('ReactNativeRoot')
  });
}
