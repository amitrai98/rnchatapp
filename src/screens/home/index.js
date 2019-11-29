import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getHomeData, addNewContact} from './HomeActions';
import AppHeader from '../common/AppHeader';
import ContactRoaster from './homecomponents/ContactRoaster';
import {requestContactPermission} from '../../util/Utility';
import ApiHandler from '../../networking/ApiHandler';
import {firebase} from '@react-native-firebase/database';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const {users} = this.state;
    const loginData = this.props.navigation.getParam('loginData');
    this.props.getHomeData({userId: loginData.user.uid});
    requestContactPermission()
      .then(result => {
        console.log(`${result}`);
        if (result != undefined && result.success) {
          console.log(`${result}`);
          // result.data.map(item => {
          //   console.log(`${item}`);
          //   users.push(item);
          // });

          // this.setState({users});
          if (users.length > 0) {
            var user = firebase.auth().currentUser;
            let instance = ApiHandler.getInstance();

            // users.map(contact => {
            //   this.props.addNewContact({contact: contact});
            // });
          }
        } else {
          console.log(`${result}`);
        }
      })
      .catch(error => console.log(`${error}`));
  }

  componentDidUpdate(prevProp) {
    const {users} = this.state;
    const {isFetching, error, data, success, failure} = this.props;
    if (prevProp.isFetching !== isFetching && !isFetching) {
      if (success) {
        console.log(`response data is ${data}`);
        for (var key in data) {
          if (data.hasOwnProperty(key)) {
            var val = data[key];
            console.log(val);
            users.push(val.userData);
          }
        }
        // data.map(item => {
        //   console.log(`${item}`);
        //   users.push(item);
        // });

        this.setState({users});
      }
    }
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
