import * as types from './ChatscreenActions';

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {},
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
        data: action.data,
      };
    case types.PULL_CHATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error,
      };
    default:
      return state;
  }
}
