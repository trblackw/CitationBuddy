import React, { Fragment } from "react";
import { render } from "react-dom";
import Test from "./components/Test";

const App = () => (
  <Fragment>
    <Test />
  </Fragment>
);

render(<App />, document.querySelector("#root"));
