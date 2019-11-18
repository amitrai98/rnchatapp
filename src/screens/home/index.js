import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHomeData} from './HomeActions';
import auth from '@react-native-firebase/auth';

type Props = {};

export class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async startAuthProcess(phoneNoWithCode) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNoWithCode);
  }

  componentDidMount() {
    this.props.getHomeData();
    this.startAuthProcess('+91 8279825908')
      .then(response => {
        console.log(`respose is  ${response}`);
      })
      .catch(error => {
        console.log(`error ${error}`);
      });
  }
  render() {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.HomeReducer;
  return {
    isFetching,
    error,
    data,
    success,
    failure,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getHomeData: bindActionCreators(getHomeData, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  container: {},
});
