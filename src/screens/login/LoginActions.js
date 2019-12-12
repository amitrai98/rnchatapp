// contants for login
export const ATTEMPT_LOGIN = 'ATTEMPT_LOGIN';
export const ATTEMPT_LOGIN_INPROGRESS = 'ATTEMPT_LOGIN_INPROGRESS';
export const ATTEMPT_LOGIN_SUCCESS = 'ATTEMPT_LOGIN_SUCCESS';
export const ATTEMPT_LOGIN_FAILURE = 'ATTEMPT_LOGIN_FAILURE';

export function attemptLogin(payload) {
  return {
    type: ATTEMPT_LOGIN,
    payload: payload,
  };
}

export function attemptLoginProgress(payload) {
  return {
    type: ATTEMPT_LOGIN_INPROGRESS,
    payload: payload,
  };
}

export function attemptLoginSuccess(payload) {
  return {
    type: ATTEMPT_LOGIN_SUCCESS,
    payload: payload,
  };
}
export function attemptLoginFailure(payload) {
  return {
    type: ATTEMPT_LOGIN_FAILURE,
    payload: payload,
  };
}
