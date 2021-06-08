import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";

export default (
    <Switch>
        <Route component = {Login} exact path = "/" />
        <Route component = {Home} path = "/home" />
    </Switch>
)