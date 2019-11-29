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
          console.log('data ', data);
          resolve(success(data));
        })
        .catch(error => {
          //error callback
          console.log('error ', error);
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
}
