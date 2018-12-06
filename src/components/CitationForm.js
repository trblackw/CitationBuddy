import React from "react";
import Form from "./Form";
import { FormHeader } from "./elements/form_elements";

const CitationForm = ({ match }) => {
   const { type, style } = match.params;
  return (
    <>
      <FormHeader>
        <h3>
          Citing a {type} in {style} style
        </h3>
      </FormHeader>
      <Form type={type} style={style} className="drop-shadow" />
    </>
  );
};

export default CitationForm;
