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
import Applogger from '../../util/Applogger';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      phoneContacts: [],
      isRefreshing: false,
    };
  }

  componentDidMount() {
    const loginData = this.props.navigation.getParam('loginData');
    this.props.getHomeData({userId: loginData.user.uid});
    requestContactPermission()
      .then(result => {
        if (result != undefined && result.success) {
          Applogger.log(`result is ${result}`);
          if (
            result != undefined &&
            result.data != undefined &&
            result.data.length > 0
          ) {
            this.setState({phoneContacts: result.data});
            // result.data.forEach(contact => {
            //   Applogger.log('result is ' + contact);
            //   if (
            //     contact != undefined &&
            //     contact.phoneNumbers != undefined &&
            //     contact.phoneNumbers.length > 0
            //   ) {
            //     Applogger.log(`contact is  ${contact}`);
            //     contact.phoneNumbers.forEach(contactNo => {
            //       Applogger.log(`no is  ${contactNo}`);
            //     });
            //   }
            // });
          }
        } else {
          Applogger.log(`result is ${result}`);
        }
      })
      .catch(errror => {});
  }

  componentDidUpdate(prevProp) {
    const {users} = this.state;
    const {
      isFetching,
      error,
      data,
      success,
      failure,
      isContactFetching,
    } = this.props;
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

        this.synchContacts(users);
      } else if (
        prevProp.isContactFetching !== isContactFetching &&
        !isContactFetching
      ) {
      }
    }
  }

  synchContacts(users) {
    const loginData = this.props.navigation.getParam('loginData');
    const {phoneContacts} = this.state;
    if (users != undefined && users.length > 0) {
      phoneContacts.forEach(contact => {
        Applogger.log('result is ' + contact);
        if (
          contact != undefined &&
          contact.phoneNumbers != undefined &&
          contact.phoneNumbers.length > 0
        ) {
          Applogger.log(`contact is  ${contact}`);
          contact.phoneNumbers.forEach(contactNo => {
            Applogger.log(`no is  ${contactNo}`);
            users.forEach(serverContact => {
              if (
                serverContact != undefined &&
                serverContact.phoneNumbers != undefined &&
                serverContact.phoneNumbers.length > 0
              ) {
                serverContact.phoneNumbers.forEach(contactNumber => {
                  if (contactNumber == contactNo)
                    Applogger.log(`synced ${contactNumber}`);
                  else Applogger.log(` its not a synced`);
                });
              }
            });
          });
        }
      });
    } else {
      phoneContacts.forEach(currentContact => {
        if (currentContact != undefined) {
          if (
            loginData != undefined &&
            loginData.user != undefined &&
            loginData.user.uid != undefined
          )
            this.props.addNewContact({
              userId: loginData.user.uid,
              userData: currentContact,
            });
        }
      });
      this.props.getHomeData({userId: loginData.user.uid});
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
  const {
    isFetching,
    isContactFetching,
    error,
    data,
    success,
    failure,
  } = state.HomeReducer;
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
    addNewContact: bindActionCreators(addNewContact, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  container: {flex: 1},
  roasterView: {flex: 1, marginTop: 5},
});
