import React, { useState, useEffect } from "react";
import { CitationContainer } from "./elements/form_elements";
import Author from "./Author";
import Icon from "./elements/Icon";

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
          <a href="#" onClick={() => setAuthorCount(count + 1)}>
            <Icon name="plus" color="#374785" />
          </a>
        </CitationContainer>
      );
  }
};

export default Form;
