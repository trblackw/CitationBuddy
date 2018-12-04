import React, { Fragment } from "react";
import { render } from "react-dom";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
    </Switch>
  </Router>
);

render(<App />, document.querySelector("#root"));
