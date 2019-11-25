import {all} from 'redux-saga/effects';
import {watchGetHomeDataRequest} from '../screens/home/HomeSaga';
import {watchAttemptLoginRequest} from '../screens/login/LoginSaga';
import {watchAttemptSignupRequest} from '../screens/signup/SignupSaga';
import {watchPullChatRequest} from '../screens/chatscreen/ChatscreenSaga';

export default function* rootSaga() {
  yield all([
    watchGetHomeDataRequest(),
    watchAttemptLoginRequest(),
    watchAttemptSignupRequest(),
    watchPullChatRequest(),
  ]);
}
