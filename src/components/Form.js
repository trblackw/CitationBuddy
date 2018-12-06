import React, { useState, useEffect } from "react";
import { CitationContainer } from "./elements/form_elements";
import { Button } from "./elements/buttons";
import Author from "./Author";

const Form = ({ type, style }) => {
  const [count, setAuthorCount] = useState(1);

  const renderAuthorInputs = () => {
    const markup = [];
    for (let i = 1; i <= count; i++) {
      markup.push(<Author key={i} />);
    }
    return markup;
  };

  const authors = renderAuthorInputs();
  console.log(authors);
  switch (type) {
    case "book":
      return (
        <CitationContainer>
          {authors.length > 1 ? authors.map(author => author) : authors[0]}
          <Button color="lightblue" onClick={() => setAuthorCount(count + 1)}>
            Add another author
          </Button>
        </CitationContainer>
      );
  }
};

export default Form;
