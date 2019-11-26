import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from './screens/home';
import Login from './screens/login';
import Signup from './screens/signup';
import {ChatScreen} from './screens/chatscreen';

const AppStack = createStackNavigator(
  {
    home: {screen: home},
    login: {screen: Login},
    signup: {screen: Signup},
    chatScreen: {screen: ChatScreen},
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppNavigator = createAppContainer(AppStack);

export default AppNavigator;
