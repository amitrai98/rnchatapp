import {put, takeLatest, takeEvery} from 'redux-saga/effects';
import * as types from './ChatscreenActions';
import ApiHandler from '../../networking/ApiHandler';

export function* handlePullChatRequest(action) {
  yield put(types.pullChatsProgress());
  const api = ApiHandler.getInstance();
  const response = yield api.getAllChatsBetween2Contacts(action.payload);
  if (response.success) yield put(types.pullChatsSuccess(response));
  else yield put(types.pullChatsFailure(response));
}
export function* handleSendChatMessage(action) {
  yield put(types.sendChatMessageProgress());
  const api = ApiHandler.getInstance();
  const response = yield api.sendChatMessage(action.payload);
  if (response.success) yield put(types.sendChatMessageSuccess(response));
  else yield put(types.sendChatMessageFailure(response));
}

export function* watchPullChatRequest() {
  yield takeLatest(types.PULL_CHATS, handlePullChatRequest);
  yield takeEvery(types.SEND_CHAT_MESSAGE, handleSendChatMessage);
}
