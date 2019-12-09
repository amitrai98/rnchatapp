import {put, takeLatest} from 'redux-saga/effects';
import * as types from './SignupActions';
import ApiHandler from '../../networking/ApiHandler';

export function* handleAttemptSignup(action) {
  try {
    yield put(types.attemptSignupProgress());
    let apiInstance = ApiHandler.getInstance();
    const result = yield apiInstance.signup(action.payload);
    if (result.success) yield put(types.attemptSignupSuccess(result));
    else yield put(types.attemptSignupFailure(result));
  } catch (error) {
    yield put(types.attemptSignupFailure(error));
  }
}

export function* watchAttemptSignupRequest() {
  yield takeLatest(types.ATTEMPT_SIGNUP, handleAttemptSignup);
}
