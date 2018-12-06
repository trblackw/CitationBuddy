import React from "react";
import { AuthorContainer } from "./elements/form_elements";
import { useInputValue } from "./hooks/useInputValue";

const Author = () => {
  const first = useInputValue("");
  const middle = useInputValue("");
  const last = useInputValue("");
  return (
    <>
      <AuthorContainer>
        <label htmlFor="first">First</label>
        <input type="text" name="first" {...first} />
        <label htmlFor="middle">Middle</label>
        <input type="text" name="middle" {...middle} />
        <label htmlFor="last">Last</label>
        <input type="text" name="last" {...last} />
      </AuthorContainer>
    </>
  );
};

export default Author;
