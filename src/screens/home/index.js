import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHomeData} from './HomeActions';
import AppHeader from '../common/AppHeader';
import ContactRoaster from './homecomponents/ContactRoaster';
import {requestContactPermission} from '../../util/Utility';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const {users} = this.state;
    this.props.getHomeData();
    requestContactPermission()
      .then(result => {
        console.log(`${result}`);
        if (result != undefined && result.success) {
          console.log(`${result}`);
          result.data.map(item => {
            console.log(`${item}`);
            users.push(item);
          });

          this.setState({users});
        } else {
          console.log(`${result}`);
        }
      })
      .catch(error => console.log(`${error}`));
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
            keyExtractor={item => item.rawContactId}
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
