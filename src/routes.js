import React from "react";
import {Switch, Route} from "react-router-dom";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import NewTimeline from "./components/NewTimeline.js";
import Timeline from "./components/Timeline.js";
import NewEvent from "./components/NewEvent.js";
import DeleteTimeline from "./components/DeleteTimeline.js";


export default (
    <Switch>
        <Route component = {Login} exact path = "/" />
        <Route component = {Home} path = "/home" />
        <Route component = {NewTimeline} path = "/createnewtimeline" />
        <Route component = {Timeline} path = "/timeline/:tid" />
        <Route component = {NewEvent} path = "/createnewevent/:tid" />
        <Route component = {DeleteTimeline} path = "/deletetimeline/:tid" />
    </Switch>
)