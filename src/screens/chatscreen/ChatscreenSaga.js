import {put, takeLatest} from 'redux-saga/effects';
import * as types from './ChatscreenActions';

export function* handlePullChatRequest(action) {
  yield put(types.pullChatsProgress());
  //perform work logic
}

export function* watchPullChatRequest() {
  yield takeLatest(types.PULL_CHATS, handlePullChatRequest);
}
