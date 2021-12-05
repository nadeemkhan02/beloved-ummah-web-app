import React from "react";
import Home from "../Pages/Home/Home";
import "antd/dist/antd.css";
import Navbar from "../Components/Navbar";
import { Route, Switch } from "react-router";
import AlQuran from "../Pages/AlQuran";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/al-quran" component={AlQuran} />
      </Switch>
    </>
  );
}

export default App;
