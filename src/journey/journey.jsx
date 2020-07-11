import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ConnectedApp from "./routes";


export default () => (
  <Router>
    <Switch>
      <Route path="/" component={ConnectedApp} />
    </Switch>
  </Router>
);


