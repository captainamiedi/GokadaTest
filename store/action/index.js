import React from 'react';
import {actionTypes} from './actionTypes';

export const startLoadingAction = {type: actionTypes.START_LOADING};
export const stopLoadingAction = {type: actionTypes.STOP_LOADING};
export const fetchDataSuccess = payload => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload,
});
export const fetchDataFailure = payload => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload,
});

export const getData = () => {
  return async dispatch => {
    dispatch(startLoadingAction);
    const url = 'https://jsonplaceholder.typicode.com/photos/1';
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        dispatch(stopLoadingAction);
        dispatch(fetchDataSuccess(data));
      }
    } catch (error) {
      console.log(error, 'request error');
    }
  };
};
