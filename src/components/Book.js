import React from "react";
import { FlexForm } from "./elements/index";
import { useInputValue } from "./hooks/useInputValue";

const Book = () => {
  const title = useInputValue("");
  const publisher = useInputValue("");
  const location = useInputValue("");
  const year = useInputValue("");
  return (
    <FlexForm>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" {...title} />
      <label htmlFor="publisher">Publisher</label>
      <input type="text" name="publisher" {...publisher} />
      <label htmlFor="location">Location</label>
      <input type="text" name="location" {...location} />
      <label htmlFor="year">Year</label>
      <input type="text" name="year" {...year} />
    </FlexForm>
  );
};

export default Book;
