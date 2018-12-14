import React from "react";
import { Desktop, Mobile, Tablet } from "./elements/index";

const Test = () => (
  <div>
    heyyyy
    <Desktop>
      <h1>Desktop!!</h1>
    </Desktop>
    <hr />
    <Tablet>
      <h2>Tablet!!!</h2>
    </Tablet>
    <Mobile>
      <h3>Mobile!!!!</h3>
    </Mobile>
  </div>
);

export default Test;
