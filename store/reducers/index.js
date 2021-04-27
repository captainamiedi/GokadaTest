import {actionTypes} from '../action/actionTypes';

export const getData = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
