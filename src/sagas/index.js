import {all} from 'redux-saga/effects';
import {watchGetHomeDataRequest} from '../screens/home/HomeSaga';
import {watchAttemptLoginRequest} from '../screens/login/LoginSaga';

export default function* rootSaga() {
  yield all([watchGetHomeDataRequest(), watchAttemptLoginRequest()]);
}
