import {all} from 'redux-saga/effects';
import {watchGetHomeDataRequest} from '../screens/home/HomeSaga';

export default function* rootSaga() {
  yield all([watchGetHomeDataRequest()]);
}
