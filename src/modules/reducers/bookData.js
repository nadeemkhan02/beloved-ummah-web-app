import * as ActionTypes from "../actions/actionTypes";

const initialState = {};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case ActionTypes.SAVE_BOOK_DATA:
      return { ...state, data };
    default:
      return state;
  }
};
