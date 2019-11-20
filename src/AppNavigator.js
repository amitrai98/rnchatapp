import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from './screens/home';
import Login from './screens/login';
import Signup from './screens/signup';

const AppStack = createStackNavigator(
  {
    home: {screen: home},
    login: {screen: Login},
    signup: {screen: Signup},
  },
  {
    initialRouteName: 'login',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
