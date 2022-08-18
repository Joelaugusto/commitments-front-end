import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import Edit from "./pages/edit";
import Create from "./pages/new";

const MyRoutes = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
    </Switch>
  </HashRouter>
);

export default MyRoutes;
