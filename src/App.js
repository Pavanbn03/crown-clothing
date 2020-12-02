import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from './components/header/header'


function App() {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/shop' component={Shop} />
    </Switch>
    </>
  );
}

export default App;
