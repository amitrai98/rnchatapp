import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHomeData} from './HomeActions';
import AppHeader from '../common/AppHeader';
import ContactRoaster from './homecomponents/ContactRoaster';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {id: 1, name: 'amit', status: 'offline'},
        {id: 2, name: 'amit', status: 'offline'},
        {id: 3, name: 'amit', status: 'offline'},
        {id: 4, name: 'amit', status: 'offline'},
      ],
    };
  }

  componentDidMount() {
    this.props.getHomeData();
  }

  openChatScreen(chatData) {
    this.props.navigation.navigate('chatScreen', {chatData: chatData});
  }

  render() {
    const {users} = this.state;
    return (
      <View style={styles.container}>
        <AppHeader title={`Home`} />
        <View style={styles.roasterView}>
          <FlatList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({item, index}) => (
              <ContactRoaster
                user={item}
                openChatScreen={chatData => this.openChatScreen(chatData)}
              />
            )}
          />
        </View>
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
  container: {flex: 1},
  roasterView: {flex: 1, marginTop: 5},
});
