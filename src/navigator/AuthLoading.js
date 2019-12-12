import React from 'react';
import {ActivityIndicator, StatusBar, View, Text} from 'react-native';
import {getStoreData} from '../util/Utility';
import DatabaseConst from '../util/DatabaseConst';
import AnimatedLinearGradient, {
  presetColors,
} from 'react-native-animated-linear-gradient';
export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginData: undefined};
  }
  componentDidMount() {
    getStoreData(DatabaseConst.LOGIN_DATA)
      .then(response => {
        if (response != null)
          this.props.navigation.navigate('home', {loginData: response});
        else this.props.navigation.navigate('login');
      })
      .catch(error => {
        this.props.navigation.navigate('login');
      });
  }

  render() {
    return <View style={{flex: 1, justifyContent: 'center'}}></View>;
  }
}
