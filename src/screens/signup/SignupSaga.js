import {put, takeLatest} from 'redux-saga/effects';
import * as types from './SignupActions';

import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';

export function* handleAttemptSignup(action) {
  yield put(types.attemptSignupProgress());

  const result = yield onCreateAccount(action.payload);
}

async function onCreateAccount(payload) {
  const {name, email, password, phone} = payload;
  // firebase
  //   .database()
  //   .ref('Users/')
  //   .set({
  //     email,
  //     name,
  //     name,
  //     password,
  //     phone,
  //   })
  //   .then(data => {
  //     //success callback
  //     console.log('data ', data);
  //   })
  //   .catch(error => {
  //     console.log(`error is ${error}`);
  //     //error callback
  //   });

  // firebase
  //   .auth()
  //   .signInWithEmailAndPassword(email, password)
  //   .then(() => console.log(`loggedin `))
  //   .catch(error => console.log(`got an error ${error}`));
}

export function* watchAttemptSignupRequest() {
  yield takeLatest(types.ATTEMPT_SIGNUP, handleAttemptSignup);
}
