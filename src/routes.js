import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import Edit from "./pages/edit";
import Create from "./pages/new";

const MyRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
    </Switch>
  </Router>
);

export default MyRoutes;
