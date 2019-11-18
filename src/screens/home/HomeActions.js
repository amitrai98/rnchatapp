// contants for getting home data
export const GET_HOME_DATA = 'GET_HOME_DATA';
export const GET_HOME_DATA_INPROGRESS = 'GET_HOME_DATA_INPROGRESS';
export const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS';
export const GET_HOME_DATA_FAILURE = 'GET_HOME_DATA_FAILURE';

export function getHomeData(payload) {
  return {
    type: GET_HOME_DATA,
    payload: payload,
  };
}

export function getHomeDataProgress(payload) {
  return {
    type: GET_HOME_DATA_INPROGRESS,
    payload: payload,
  };
}

export function getHomeDataSuccess(payload) {
  return {
    type: GET_HOME_DATA_SUCCESS,
    payload: payload,
  };
}
export function getHomeDataFailure(payload) {
  return {
    type: GET_HOME_DATA_FAILURE,
    payload: payload,
  };
}
