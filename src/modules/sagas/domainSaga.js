import { put, call } from "redux-saga/effects";
import * as serviceCreators from "../services";
import * as actionCreators from "../actions";

export function* getBookData() {
  try {
    const resp = yield call(serviceCreators.getBookDataService);
    if (resp.status === 200 || resp.status === 201) {
      yield put(actionCreators.toggelMainLoader(false));
      yield put(actionCreators.saveBookData(resp.data.data));
    } else {
      yield put(actionCreators.toggelMainLoader(false));
    }
  } catch (error) {
    yield put(actionCreators.toggelMainLoader(false));
  }
}
