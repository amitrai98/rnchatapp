import {put, takeLatest} from 'redux-saga/effects';
import * as types from './HomeActions';

export function* handleGetHomeData(action) {
  yield put(types.getHomeDataProgress());
  //perform work logic
}

export function* watchGetHomeDataRequest() {
  yield takeLatest(types.GET_HOME_DATA, handleGetHomeData);
}
