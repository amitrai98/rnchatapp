import {put, takeLatest, takeEvery} from 'redux-saga/effects';
import * as types from './HomeActions';
import ApiHandler from '../../networking/ApiHandler';

export function* handleGetHomeData(action) {
  yield put(types.getHomeDataProgress());
  // get all contacts
  let instance = ApiHandler.getInstance();
  const result = yield instance.getFirebaseContacts(action.payload.userId);
  if (result.success) yield put(types.getHomeDataSuccess(result));
  else yield put(types.getHomeDataFailure(result));
}

export function* handleAddContact(action) {
  yield put(types.addNewContactProgress());
  let instance = ApiHandler.getInstance();
  const result = yield instance.addContact(action.payload);
  if (result.success) yield put(types.addNewContactSuccess(result));
  else yield put(types.addNewContactFailure(result));
}

export function* watchGetHomeDataRequest() {
  yield takeLatest(types.GET_HOME_DATA, handleGetHomeData);
  yield takeEvery(types.ADD_NEW_CONTACT, handleAddContact);
}
