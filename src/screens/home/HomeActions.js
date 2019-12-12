// contants for getting home data
export const GET_HOME_DATA = 'GET_HOME_DATA';
export const GET_HOME_DATA_INPROGRESS = 'GET_HOME_DATA_INPROGRESS';
export const GET_HOME_DATA_SUCCESS = 'GET_HOME_DATA_SUCCESS';
export const GET_HOME_DATA_FAILURE = 'GET_HOME_DATA_FAILURE';

// contants for adding new contact
export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
export const ADD_NEW_CONTACT_INPROGRESS = 'ADD_NEW_CONTACT_INPROGRESS';
export const ADD_NEW_CONTACT_SUCCESS = 'ADD_NEW_CONTACT_SUCCESS';
export const ADD_NEW_CONTACT_FAILURE = 'ADD_NEW_CONTACT_FAILURE';

export function addNewContact(payload) {
  return {
    type: ADD_NEW_CONTACT,
    payload: payload,
  };
}

export function addNewContactProgress(payload) {
  return {
    type: ADD_NEW_CONTACT_INPROGRESS,
    payload: payload,
  };
}

export function addNewContactSuccess(payload) {
  return {
    type: ADD_NEW_CONTACT_SUCCESS,
    payload: payload,
  };
}
export function addNewContactFailure(payload) {
  return {
    type: ADD_NEW_CONTACT_FAILURE,
    payload: payload,
  };
}

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
