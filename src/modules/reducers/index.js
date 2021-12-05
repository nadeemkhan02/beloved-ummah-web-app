import { combineReducers } from "redux";
import bookData from "./bookData";
import loader from "./loader";

const reducer = combineReducers({
  Loader: loader,
  bookData: bookData,
});

const rootReducer = (state, action) => {
  return reducer(state, action);
};

export default rootReducer;
