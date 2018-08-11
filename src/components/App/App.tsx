/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react';
import { Provider } from 'react-redux';
import Home from '../../containers/Home/Home';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from '../../reducers';

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
