import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-phones';

export const fetchPhonesStart = () => {
  return {
    type: actionTypes.FETCH_PHONES_INIT,
  };
};

export const fetchPhonesSuccess = (phones) => {
  return {
    type: actionTypes.FETCH_PHONES_SUCCESS,
    phones,
  };
};

export const fetchPhonesFailed = (error) => {
  return {
    type: actionTypes.FETCH_PHONES_FAILED,
    error,
  };
};

export const fetchPhoneByIdStart = () => {
  return {
    type: actionTypes.FETCH_PHONE_ID_INIT,
  };
};

export const fetchPhoneByIdSuccess = (phone) => {
  return {
    type: actionTypes.FETCH_PHONE_ID_SUCCESS,
    phone,
  };
};

export const fetchPhoneByIdFailed = (error) => {
  return {
    type: actionTypes.FETCH_PHONE_ID_FAILED,
    error,
  };
};

export const fetchPhones = () => {
  return (dispatch) => {
    dispatch(fetchPhonesStart());
    axios
      .get('/phones')
      .then((response) => {
        dispatch(fetchPhonesSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchPhonesFailed(err));
      });
  };
};

export const fetchPhoneById = (phoneId) => {
  return (dispatch) => {
    dispatch(fetchPhoneByIdStart());
    axios
      .get(`/phones/${phoneId}`)
      .then((response) => {
        dispatch(fetchPhoneByIdSuccess(response.data));
      })
      .catch((err) => {
        dispatch(fetchPhoneByIdFailed(err));
      });
  };
};
