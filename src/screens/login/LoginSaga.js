import {put, takeLatest} from 'redux-saga/effects';
import * as types from './LoginActions';

export function* handleAttemptLogin(action) {
  yield put(types.attemptLoginProgress());
  //perform work logic
}

export function* watchAttemptLoginRequest() {
  yield takeLatest(types.ATTEMPT_LOGIN, handleAttemptLogin);
}
