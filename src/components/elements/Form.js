import React, { Component } from "react";
import styled from "styled-components";

export default class Form extends Component {
  render() {
    return (
      <CitationForm>
        <input type="text" name="first" />
        <input type="text" name="middle" />
        <input type="text" name="last" />
        <input type="text" name="doc-title" />
        <input type="text" name="publication" />
      </CitationForm>
    );
  }
}

const CitationForm = styled.form`
  margin: 1em auto;
  padding: 1.5em;
  border: 1px solid black;
`;
