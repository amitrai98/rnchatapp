import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {pullChats} from './ChatscreenActions';
import AppHeader from '../common/AppHeader';
type Props = {};

export class ChatScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {chatData} = this.props.navigation.state.params;
    return (
      <View>
        <AppHeader title={`${chatData.name}`} />
        <Text>{`get data for ${chatData.name}`}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const {isFetching, error, data, success, failure} = state.ChatReducer;
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
    pullChats: bindActionCreators(pullChats, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
const styles = StyleSheet.create({
  container: {},
});
