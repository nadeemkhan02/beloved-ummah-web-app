import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "../utils/store";
import "../global.css";
import { BrowserRouter } from "react-router-dom";

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

export default Root;
