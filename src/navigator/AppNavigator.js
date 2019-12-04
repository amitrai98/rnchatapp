import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import ChatScreen from '../screens/chatscreen';
import AuthLoadingScreen from './AuthLoading';

const AppStack = createStackNavigator({
  home: {screen: home},

  chatScreen: {screen: ChatScreen},
});
const AuthStack = createStackNavigator({
  login: {screen: Login},
  signup: {screen: Signup},
});
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
      navigationOptions: {
        headerVisible: false,
      },
    },
  ),
);
// export default AppNavigator;
