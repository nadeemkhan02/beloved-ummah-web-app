import * as ActionTypes from "./actionTypes";

export const getBookData = () => ({
  type: ActionTypes.GET_BOOK_DATA,
});

export const saveBookData = (data) => ({
  type: ActionTypes.SAVE_BOOK_DATA,
  data,
});
