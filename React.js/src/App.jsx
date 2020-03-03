/*********************************************************************************
* WEB422 – Assignment 04
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of this
* assignment has been copied manually or electronically from any other source (including web sites) or
* distributed to other students.
*
* Name: Lean Junio Student ID: 019-109-123 Date: July 14, 2019
*
********************************************************************************/

import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Teams from "./components/Teams";
import Employees from "./components/Employees";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/projects" component={Projects} />
        <Route path="/employees" component={Employees} />
        <Route path="/Teams" component={Teams} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}