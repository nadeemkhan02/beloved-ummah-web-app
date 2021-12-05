import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as domainSaga from "./domainSaga";

export default function* mySaga() {
  yield takeLatest(actionTypes.GET_BOOK_DATA, domainSaga.getBookData);
}
