import {firebase} from '@react-native-firebase/database';
import {success, failure} from './NetworkConst';

var authToken = null;
export default class ApiHandler {
  instance = null;

  /**
   * provides token for api calls
   * @param {token for api call} authToken
   */
  static getInstance(token) {
    if (this.instance == null) {
      this.instance = new ApiHandler();
    }
    authToken = token;
    return this.instance;
  }

  /**
   * returns header
   */
  getHeader(isMultipart = false) {
    return {
      headers:
        authToken != null && authToken != undefined
          ? this.getHeaderWithToken(isMultipart)
          : this.getHeaderWithoutToken(),
    };
  }

  /**
   * returns header with authtoken
   */
  getHeaderWithToken(isMultipart = false) {
    if (isMultipart) {
      return {
        Authorization: 'Bearer ' + authToken,
        Referer: AppConstants.Referer_URL,
        'Content-Type': 'multipart/form-data',
      };
    }
    return {
      Authorization: 'Bearer ' + authToken,
      Referer: AppConstants.Referer_URL,
    };
  }

  /**
   * returns header without token
   */
  getHeaderWithoutToken() {
    return {
      Referer: AppConstants.Referer_URL,
    };
  }

  login(payload) {
    const {username, password} = payload;
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(username, password)
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  addContact(payload) {
    return new Promise((resolve, reject) => {
      const {userData, userId} = payload;
      firebase
        .database()
        .ref(`UsersList/${userId}/`)
        .push({
          userData,
        })
        .then(data => {
          //success callback
          resolve(success(data));
        })
        .catch(error => {
          //error callback
          reject(failure(error));
        });
    });
  }

  getFirebaseContacts(userId) {
    return new Promise((resolve, reject) => {
      const contactRef = firebase.database().ref(`UsersList/${userId}/`);
      contactRef.on('value', function(snapshot) {
        return resolve(success(snapshot.val()));
      });
    });
  }

  sendChatMessage(payload) {
    return new Promise((resolve, reject) => {
      const {messageFrom, messageTo} = payload.chatData;
      var ref = firebase.database().ref(`messages/${messageFrom}_${messageTo}`);
      ref
        .push(payload.chatData)
        .then(data => {
          //success callback
          resolve(success(data));
        })
        .catch(error => {
          //error callback
          reject(failure(error));
        });
    });
  }

  getAllChatsBetween2Contacts(payload) {
    return new Promise((resolve, reject) => {
      const {messageFrom, messageTo} = payload;
      var ref = firebase
        .database()
        .ref(`messages/${messageFrom}_${messageTo}/`);
      ref
        .orderByKey('messageTime')
        .once('value', function(snapshot) {
          return resolve(success(snapshot.val()));
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  startListeningForMessages(payload, onMessageReceived) {
    return new Promise((resolve, reject) => {
      const {messageFrom, messageTo} = payload;
      var ref = firebase
        .database()
        .ref(`messages/${messageFrom}_${messageTo}/`);

      var chatinstance = ref
        .orderByKey('messageTime')
        .on('value', function(snapshot) {
          if (snapshot != undefined && onMessageReceived != undefined) {
            onMessageReceived(success(snapshot.val()));
          }
        });
      resolve(chatinstance);
    });
  }
}
