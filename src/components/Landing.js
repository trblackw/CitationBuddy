import React from "react";
import {SelectForm, Manuals}
import { Button } from "./elements/buttons";
import { useInputValue } from "./customHooks/useInputValue";

const Landing = () => {
  const type = useInputValue("");
  const style = useInputValue("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log({ type: type.value, style: style.value });
  };

  return (
    <>
      <SelectForm onSubmit={e => handleSubmit(e)} className="drop-shadow">
        <div className="select">
          <label htmlFor="type">I want to cite a</label>
          <select name="type" {...type}>
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
          <select name="style" {...style}>
            <option value="APA">APA 6</option>
            <option value="MLA7">MLA 7/essay from book</option>
            <option value="MLA8">MLA 8</option>
            <option value="chicago">Chicago</option>
            <option value="CSE-CBE">CSE/CBE</option>
          </select>
        </div>
        <Button type="submit" color="#374785" className="shadow">
          submit
        </Button>
      </SelectForm>
      <Manuals className="drop-shadow">
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
    </>
  );
};

export default Landing;


