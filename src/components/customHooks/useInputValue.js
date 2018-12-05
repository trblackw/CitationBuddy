import { useState } from "react";

export const useInputValue = (initial = "") => {
  const [type, setType] = useState(initial);
  const [style, setStyle] = useState(initial);

  return {
    type,
    style,
    changeType: e => setType(e.target.value),
    changeStyle: e => setStyle(e.target.value),
    keyInput: (e, callback) => {
      return e.keyCode === 13 ? callback(value) : null;
    }
  };
};
