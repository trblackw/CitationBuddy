import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./elements/Buttons";

const Landing = () => {
  const [type, setType] = useState({ type: "" });
  const [style, setStyle] = useState({ style: "" });
console.log(setType);
  const handleSubmit = e => {
    e.preventDefault();
  };
   
  return (
    <Fragment>
      <SelectForm onSubmit={e => handleSubmit(e)}>
        <div className="select">
          <label htmlFor="type">I want to cite a</label>
          <select name="type" onChange={e => setType({ type: e.target.value })}>
            <option value="book">book</option>
            <option value="chapter">chapter/essay from book</option>
            <option value="magazine">magazine article</option>
            <option value="newspaper">newspaper article</option>
            <option value="journal">scholarly journal article</option>
            <option value="website">website</option>
          </select>
        </div>
        <div className="select">
          <label htmlFor="style">in Citation style</label>
          <select
            name="style"
            onChange={e => setStyle({ style: e.target.value })}
          >
            <option value="APA">APA 6</option>
            <option value="MLA7">MLA 7/essay from book</option>
            <option value="MLA8">MLA 8</option>
            <option value="chicago">Chicago</option>
            <option value="CSE-CBE">CSE/CBE</option>
          </select>
        </div>
        <Button type="submit" color="#374785">
          submit
        </Button>
      </SelectForm>
      <Manuals>
        <h3>
          THE CITATION BUILDER IS BASED ON THE FOLLOWING CITATION MANUALS:
        </h3>
        <ul>
          <li>American Psychological Association 6th edition</li>
          <li>Modern Language Association 7th edition</li>
          <li>Modern Language Association 8th edition</li>
          <li>Chicago Manual of Style 16th edition</li>
          <li>Council of Science Editors</li>
        </ul>
      </Manuals>
    </Fragment>
  );
};

export default Landing;

const SelectForm = styled.form`
  margin: 1.5em auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #374785;
  width: 85%;
  background: #f76c6c;
  color: whitesmoke;
  align-content: center;

  div.select {
    margin: 0;
    padding: 1.5em;

    label {
      margin-right: 0.5em;
    }
  }
`;

const Manuals = styled.div`
  border: 1px solid white;
  background: whitesmoke;
  margin: 2em auto;
  width: 60%;
  text-align: center;

  ul {
    list-style-type: none;
  }
`;
