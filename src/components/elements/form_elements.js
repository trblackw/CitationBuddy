import styled from "styled-components";

export const FormHeader = styled.div`
  margin: 0.2em auto;
  padding: 1em;
  font-size: 1.5em;
  font-weight: bolder;
  text-align: center;
  color: whitesmoke;
`;

export const SelectForm = styled.form`
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

export const Manuals = styled.div`
  border: 1px solid white;
  background: whitesmoke;
  padding: 1em;
  border-radius: 4px;
  border: 2px solid #374785;
  margin: 2em auto;
  width: 60%;
  text-align: center;

  ul {
    list-style-type: none;
  }
`;

export const CitationContainer = styled.div`
  margin: 1em auto;
  padding: 2em;
  background: #f76c6c;
  color: whitesmoke;
  width: 80%;
  border-radius: 5px;
  border: 2px solid #374785;

  label {
    margin-top: 0.5em;
  }

  input {
    display: inline-block;
    margin: 0.5em 1em;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  input[name="first"],
  input[name="last"] {
    width: 30%;
  }

  input[name="middle"] {
    width: 10%;
  }

  input[name="title"] {
    width: 90%;
  }

  input[name="publisher"] {
    width: 50%;
  }

  input[name="location"] {
    width: 35%;
  }

  input[name="year"] {
    width: 25%;
  }
  svg {
    float: right;
  }

  hr {
    border-top: 1px solid #374785;
    border-bottom: 1px solid #374785;
  }
`;

export const FlexForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 1em;
`;
