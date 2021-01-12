import * as actionTypes from '../actions/actionTypes';

const initialState = {
  phones: [],
  phone: null,
  isLoading: false,
};

const fetchPhonesInit = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const fetchPhonesSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    phones: action.phones,
  };
};

const fetchPhonesFailed = (state, action) => {
  return {
    ...state,
    isLoading: false,
  };
};

const fetchPhoneByIdInit = (state, action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const fetchPhoneByIdSuccess = (state, action) => {
  return {
    ...state,
    isLoading: false,
    phone: action.phone,
  };
};

const fetchPhoneByIdFailed = (state, action) => {
  return {
    ...state,
    isLoading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PHONES_INIT:
      return fetchPhonesInit(state, action);
    case actionTypes.FETCH_PHONES_SUCCESS:
      return fetchPhonesSuccess(state, action);
    case actionTypes.FETCH_PHONES_FAILED:
      return fetchPhonesFailed(state, action);
    case actionTypes.FETCH_PHONE_ID_INIT:
      return fetchPhoneByIdInit(state, action);
    case actionTypes.FETCH_PHONE_ID_SUCCESS:
      return fetchPhoneByIdSuccess(state, action);
    case actionTypes.FETCH_PHONE_ID_FAILED:
      return fetchPhoneByIdFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
