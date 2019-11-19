import * as types from './SignupActions';

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {},
};

export default function signUpReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.ATTEMPT_SIGNUP_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true,
      };
    case types.ATTEMPT_SIGNUP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data,
      };
    case types.ATTEMPT_SIGNUP_FAILURE:
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
