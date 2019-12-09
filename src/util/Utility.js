import {PermissionsAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Contacts from 'react-native-contacts';

export function requestContactPermission() {
  return new Promise((resolve, reject) => {
    try {
      // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      //   title: 'Chat app requires contacts permission',
      //   message:
      //     'Chat app requires contacts permission for providing chat features.',
      //   buttonNeutral: 'Ask Me Later',
      //   buttonNegative: 'Cancel',
      //   buttonPositive: 'OK',
      // })
      //   .then(granted => {
      //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //       Contacts.getAll((err, contacts) => {
      //         if (err === 'denied') {
      //           reject({success: false, error: err});
      //         } else {
      //           //           resolve({success: true, data: contacts});
      //         }
      //       });
      //     }
      //   })
      //   .catch(error => {
      //     reject({success: false, error: err});
      //   });
      getPermission()
        .then(result => {
          if (result === PermissionsAndroid.RESULTS.GRANTED) {
            Contacts.getAll((err, contacts) => {
              if (err === 'denied') {
                return reject({success: false, error: err});
              } else {
                return resolve({success: true, data: contacts});
              }
            });
          } else return reject({success: false, error: err});
        })
        .catch(error => {
          return reject({success: false, error: error});
        });
    } catch (err) {
      return reject({success: false, error: err});
    }
  });
}

let getPermission = function() {
  return new Promise((resolve, reject) => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Chat app requires contacts permission',
      message:
        'Chat app requires contacts permission for providing chat features.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    })
      .then(result => {
        return resolve(result);
      })
      .catch(error => {
        return reject(error);
      });
  });
};

/**
 * stores data in local storage.
 * @param {stores the data with this key} key_to_be_paired
 * @param {data to be stored} data
 */
export const setStoreData = (key_to_be_paired, data) => {
  return new Promise((resolve, reject) => {
    try {
      AsyncStorage.setItem(key_to_be_paired, JSON.stringify(data))
        .then(result => {
          resolve(result);
        })
        .catch(errror => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * returns data stored with the key
 * @param {returns the data stored with this key} key_to_be_fetched
 */
export const getStoreData = key_to_be_fetched => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key_to_be_fetched)
      .then(value => {
        if (value !== null) {
          let resultJson = JSON.parse(value);
          resolve(resultJson);
        } else {
          reject(value);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};

/**
 * removes the data that is stored with this key
 * @param {remove the data stored with this key} key_to_be_removed
 */
export const removeStoreData = key_to_be_removed => {
  new Promise((resolve, reject) => {
    try {
      resolve(AsyncStorage.removeItem(key_to_be_removed));
    } catch (error) {
      reject(error);
    }
  });
};
