import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from './Components/Auth/Auth';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';


export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);