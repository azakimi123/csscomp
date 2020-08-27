import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from './Components/Auth/Auth';
import Register from './Components/Auth/Register';
import Dashboard from './Components/Dashboard/Dashboard';
import BoxModel from './Components/BoxModel/BoxModel';
import Float from './Components/FloatDisplayFontBackground/Float';
import Aloha from './Components/Aloha/Aloha';
import Form from './Components/Form/Form';
import List from './Components/List/List';
import MediaQueries from './Components/MediaQueries/MediaQueries';
import MediaTypes from './Components/MediaTypes/MediaTypes';


export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/boxModel" component={BoxModel} />
    <Route path="/float" component={Float} />
    <Route path="/aloha" component={Aloha} />
    <Route path="/form" component={Form} />
    <Route path="/list" component={List} />
    <Route path="/media/queries" component={MediaQueries} />
    <Route path="/media/types" component={MediaTypes} />
  </Switch>
);