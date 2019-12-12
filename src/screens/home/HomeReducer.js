import * as types from './HomeActions';

const initialState = {
  data: {},
  addContactData: {},
  addContacsuccess: false,
  addContacfailure: false,
  isContactFetching: false,
  isFetching: false,
  success: false,
  failure: false,
  error: {},
};

export default function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_HOME_DATA_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true,
      };
    case types.GET_HOME_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.payload.data,
      };
    case types.GET_HOME_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error,
      };

    case types.ADD_NEW_CONTACT_INPROGRESS:
      return {
        ...state,
        addContactData: {},
        addContacsuccess: false,
        addContacfailure: false,
        isContactFetching: true,
      };
    case types.ADD_NEW_CONTACT_SUCCESS:
      return {
        ...state,
        isContactFetching: false,
        addContacsuccess: true,
        addContacfailure: false,
        addContactData: action.data,
      };
    case types.ADD_NEW_CONTACT_FAILURE:
      return {
        ...state,
        isContactFetching: false,
        addContacsuccess: false,
        addContacfailure: true,
        error: action.error,
      };
    default:
      return state;
  }
}
