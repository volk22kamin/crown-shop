import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header-top/header.component";
import SignInAndSignUp from "./pages/signin-and-signup/signin-and-signup.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
