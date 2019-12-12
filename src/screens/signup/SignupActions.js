// contants for attempting signup
export const ATTEMPT_SIGNUP = 'ATTEMPT_SIGNUP';
export const ATTEMPT_SIGNUP_INPROGRESS = 'ATTEMPT_SIGNUP_INPROGRESS';
export const ATTEMPT_SIGNUP_SUCCESS = 'ATTEMPT_SIGNUP_SUCCESS';
export const ATTEMPT_SIGNUP_FAILURE = 'ATTEMPT_SIGNUP_FAILURE';

export function attemptSignup(payload) {
  return {
    type: ATTEMPT_SIGNUP,
    payload: payload,
  };
}

export function attemptSignupProgress(payload) {
  return {
    type: ATTEMPT_SIGNUP_INPROGRESS,
    payload: payload,
  };
}

export function attemptSignupSuccess(payload) {
  return {
    type: ATTEMPT_SIGNUP_SUCCESS,
    payload: payload,
  };
}
export function attemptSignupFailure(payload) {
  return {
    type: ATTEMPT_SIGNUP_FAILURE,
    payload: payload,
  };
}
