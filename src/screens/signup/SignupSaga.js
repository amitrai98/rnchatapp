import {put, takeLatest} from 'redux-saga/effects';
import * as types from './SignupActions';
import ApiHandler from '../../networking/ApiHandler';

export function* handleAttemptSignup(action) {
  yield put(types.attemptSignupProgress());
  let apiInstance = ApiHandler.getInstance();
  const result = yield apiInstance.signup(action.payload);
}

export function* watchAttemptSignupRequest() {
  yield takeLatest(types.ATTEMPT_SIGNUP, handleAttemptSignup);
}
