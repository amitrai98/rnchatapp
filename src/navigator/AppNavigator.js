import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import ChatScreen from '../screens/chatscreen';
import AuthLoadingScreen from './AuthLoading';

let navigationOptions = {
  headerMode: 'none',
  header: null,
};

const AppStack = createStackNavigator(
  {
    home: {screen: home},
    chatScreen: {screen: ChatScreen},
  },
  {
    initialRouteName: 'home',
    headerMode: 'none',
  },
);
const AuthStack = createStackNavigator(
  {
    login: {screen: Login},
    signup: {screen: Signup},
  },
  {
    initialRouteName: 'login',
    headerMode: 'none',
  },
);
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
      headerMode: 'none',
      navigationOptions: navigationOptions,
    },
  ),
);
// export default AppNavigator;
