import React, { useState } from "react";
import { Icon, CitationContainer, Button } from "./elements/index";
import Author from "./Author";
import Book from "./Book";

const Form = ({ type, style }) => {
  const [count, setAuthorCount] = useState(1);

  const renderAuthorInputs = () => {
    let markup = [];
    for (let i = 1; i <= count; i++) {
      markup = [...markup, <Author key={i} />];
    }
    return markup;
  };

  const authors = renderAuthorInputs();
  console.log(authors);
  switch (type) {
    case "book":
      return (
        <CitationContainer>
          {authors.length > 1 ? authors : authors[0]}
          <a href="#" onClick={() => setAuthorCount(count + 1)}>
            <Icon name="plus" color="#374785" />
          </a>
          <hr />
          <Book />
          <Button color="#374785" position={"0 auto"}>
            submit
          </Button>
        </CitationContainer>
      );
    default:
      return <h1>oops</h1>;
  }
};

export default Form;
