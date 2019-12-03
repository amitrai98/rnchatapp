import * as types from './ChatscreenActions';

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {},

  chatData: {},
  chatSentSuccess: false,
  chatSentFailure: false,
  chatSentError: {},
};

export default function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.PULL_CHATS_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true,
      };
    case types.PULL_CHATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.payload.data,
      };
    case types.PULL_CHATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error,
      };

    // send chat

    case types.SEND_CHAT_MESSAGE_INPROGRESS:
      return {
        ...state,
        chatData: action.data,
        chatSentSuccess: false,
        chatSentFailure: false,
        isFetching: true,
      };
    case types.SEND_CHAT_MESSAGE_SUCCESS:
      return {
        ...state,
        chatData: {},
        chatSentSuccess: true,
        chatSentFailure: false,
        isFetching: false,
      };
    case types.SEND_CHAT_MESSAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        chatSentSuccess: false,
        chatSentFailure: true,
        chatSentError: action.error,
      };

    default:
      return state;
  }
}
