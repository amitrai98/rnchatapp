import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHomeData, addNewContact} from './HomeActions';
import AppHeader from '../common/AppHeader';
import ContactRoaster from './homecomponents/ContactRoaster';
import {requestContactPermission, setStoreData} from '../../util/Utility';
import Loader from '../common/Loader';
import DatabaseConst from '../../util/DatabaseConst';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isRefreshing: false,
    };
  }

  componentDidMount() {
    const loginData = this.props.navigation.getParam('loginData');
    this.props.getHomeData({userId: loginData.user.uid});
    requestContactPermission()
      .then(result => {
        if (result != undefined && result.success) {
        } else {
        }
      })
      .catch(errror => {});
  }

  componentDidUpdate(prevProp) {
    const {users} = this.state;
    const {isFetching, error, data, success, failure} = this.props;
    if (prevProp.isFetching !== isFetching && !isFetching) {
      this.setState({isRefreshing: false});
      if (success) {
        users.splice(0, users.length);
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var val = data[key];
            users.push(val.userData);
          }
        }
        // data.map(item => {
        //   //   users.push(item);
        // });

        this.setState({users});
      }
    }
  }

  openChatScreen(chatData) {
    this.props.navigation.navigate('chatScreen', {
      chatData: chatData,
      loginData: this.props.navigation.getParam('loginData'),
    });
  }

  handleLoadMore = () => {
    if (!this.state.isRefreshing) {
      this.page = this.page + 1; // increase page by 1
      // this.fetchUser(this.page); // method for API call
    }
  };

  onRefresh() {
    this.setState({isRefreshing: true});
    const loginData = this.props.navigation.getParam('loginData');
    this.props.getHomeData({userId: loginData.user.uid});
  }

  handleSignout() {
    setStoreData(DatabaseConst.LOGIN_DATA, null);
    this.props.navigation.navigate('AuthLoading');
  }

  render() {
    const {users, isRefreshing} = this.state;
    const {isFetching} = this.props;
    return (
      <View style={styles.container}>
        <AppHeader
          title={`Home`}
          rightTitle={'Signout'}
          handleOnRightOptionPress={() => {
            this.handleSignout();
          }}
        />
        {!isRefreshing ? <Loader loading={isFetching} /> : null}

        <View style={styles.roasterView}>
          <FlatList
            data={users}
            keyExtractor={item => item.rawContactId}
            refreshControl={
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh.bind(this)}
              />
            }
            renderItem={({item, index}) => (
              <ContactRoaster
                user={item}
                openChatScreen={chatData => this.openChatScreen(chatData)}
              />
            )}
            onEndReachedThreshold={0.4}
            onEndReached={this.handleLoadMore.bind(this)}
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
