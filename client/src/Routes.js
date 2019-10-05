import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Menu from "./core/Navbar";
import Dashboard from "./user/UserDashboard";
import PrivateRoute from "./auth/PrivateRoute";

const Routes = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
