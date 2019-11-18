import * as types from './LoginActions';

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {},
};

export default function loginReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ATTEMPT_LOGIN_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true,
      };
    case types.ATTEMPT_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data,
      };
    case types.ATTEMPT_LOGIN_FAILURE:
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
