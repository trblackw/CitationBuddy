import React from "react";
import { render } from "react-dom";
import Landing from "./components/Landing";
import CitationForm from "./components/CitationForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/:type/:style" component={CitationForm} />
    </Switch>
  </Router>
);

render(<App />, document.querySelector("#root"));
