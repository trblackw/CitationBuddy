import React, { useState, Fragment } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      <p>count = {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </Fragment>
  );
};

export default Test;
