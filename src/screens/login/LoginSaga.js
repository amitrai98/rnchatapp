import {put, takeLatest} from 'redux-saga/effects';
import * as types from './LoginActions';
import ApiHandler from '../../networking/ApiHandler';

export function* handleAttemptLogin(action) {
  yield put(types.attemptLoginProgress());
  const response = yield ApiHandler.getInstance().login(action.payload);
  console.log(`response is ${JSON.stringify(response)}`);
  yield put(types.attemptLoginSuccess(response));
}

export function* watchAttemptLoginRequest() {
  yield takeLatest(types.ATTEMPT_LOGIN, handleAttemptLogin);
}
