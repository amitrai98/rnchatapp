import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {getStoreData} from '../util/Utility';
import DatabaseConst from '../util/DatabaseConst';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loginData: undefined};
  }
  componentDidMount() {
    getStoreData(DatabaseConst.LOGIN_DATA)
      .then(response => {
        console.log(`login data is s${JSON.stringify(response)}`);
        this.props.navigation.navigate('home', {loginData: response});
      })
      .catch(error => {
        console.log(`${error}`);
        this.props.navigation.navigate('login');
      });
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }
}
