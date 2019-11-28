import {put, takeLatest} from 'redux-saga/effects';
import * as types from './HomeActions';
import ApiHandler from '../../networking/ApiHandler';

export function* handleGetHomeData(action) {
  yield put(types.getHomeDataProgress());
  // get all contacts
  let instance = ApiHandler.getInstance();
  instance
    .getFirebaseContacts(action.payload.userId)
    .then(result => console.log(`contact list from firebase ${result}`))
    .catch(error => console.log(`error is ${error}`));
}

export function* watchGetHomeDataRequest() {
  yield takeLatest(types.GET_HOME_DATA, handleGetHomeData);
}
