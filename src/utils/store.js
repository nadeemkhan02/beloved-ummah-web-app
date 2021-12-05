import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { saveState, loadState } from "./localStorage";
import throttle from "lodash/throttle";
import rootReducer from "../modules/reducers";
import mySaga from "../modules/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const persistedState = loadState();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

store.subscribe(
  throttle(() => {
    saveState({
      bookData: store.getState().bookData,
    });
  }),
  1000
);

sagaMiddleware.run(mySaga);

export default store;
