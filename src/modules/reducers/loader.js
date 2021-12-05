import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  mainLoader: false,
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case ActionTypes.HIDE_OR_SHOW_MAIN_LOADER:
      return { ...state, mainLoader: data };
    default:
      return state;
  }
};
