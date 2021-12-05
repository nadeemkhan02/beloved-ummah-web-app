import * as ActionTypes from "./actionTypes";

export const toggelMainLoader = (data) => ({
  type: ActionTypes.HIDE_OR_SHOW_MAIN_LOADER,
  data,
});
