import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import NewTimeline from "./components/NewTimeline.js";

export default (
    <Switch>
        <Route component = {Login} exact path = "/" />
        <Route component = {Home} path = "/home" />
        <Route component = {NewTimeline} path = "/createnewtimeline" />
    </Switch>
)