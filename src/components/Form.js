import React, { useState } from "react";
import { Icon, CitationContainer, Button } from "./elements/index";
import Author from "./Author";
import Book from "./Book";

const Form = ({ type, style }) => {
  const [count, setAuthorCount] = useState(1);

  const renderAuthorInputs = () => {
    let markup = [];
    for (let i = 1; i <= count; i++) {
      markup = [...markup, <Author key={i} />, <br />];
    }
    return markup;
  };

  const authors = renderAuthorInputs();
  console.log(authors);
  switch (type) {
    case "book":
      return (
        <CitationContainer>
          <div className="form-container">
            {authors.length > 1 ? authors : authors[0]}
            <a href="#" onClick={() => setAuthorCount(count + 1)}>
              <Icon name="plus" color="#374785" />
            </a>
          </div>
          <hr />
            <div className="form-container" style={{margin: "1em auto 0 auto"}}>
            <Book />
          </div>
          <Button color="#374785" position={"1em 0 auto 0"}>
            submit
          </Button>
        </CitationContainer>
      );
    default:
      return <h1>oops</h1>;
  }
};

export default Form;
