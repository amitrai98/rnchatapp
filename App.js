import React, {Component} from 'react';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import saga from 'redux-saga';
import * as reducers from './src/reducers';
import rootSaga from './src/sagas';
import AppNavigator from './src/navigator/AppNavigator';

// The middlewares which will be used in this App
const middlewares = [];
// Initialize the reducers
const reducer = combineReducers(reducers);
// Initialize the saga middleware
const sagaMiddleware = saga();

middlewares.push(sagaMiddleware);

const store = createStore(reducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
