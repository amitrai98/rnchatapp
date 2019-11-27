import {PermissionsAndroid} from 'react-native';
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
      //           console.log('found all contacts ' + contacts);
      //           resolve({success: true, data: contacts});
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
                console.log('found all contacts ' + contacts);
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
