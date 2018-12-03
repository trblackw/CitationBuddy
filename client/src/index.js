import React, { Component } from "react";
import { render } from "react-dom";
import 'client/src/App.css'

export default class HelloWorld extends Component {
  render() {
    return <div>HELLO WORLD</div>;
  }
}

render(<HelloWorld />, document.querySelector("#root"));
