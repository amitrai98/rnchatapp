import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from './screens/home';
import {Login} from './screens/login';

const AppStack = createStackNavigator(
  {
    home: {screen: home},
    login: {screen: Login},
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
