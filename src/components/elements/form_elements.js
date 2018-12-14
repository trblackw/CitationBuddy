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

export const Button = styled.button`
  background: ${props => props.color};
  padding: 0 0.5em;
  color: whitesmoke;
  width: auto;
  height: 20px;
  border: none;
  margin: ${props => props.position};
  position: relative;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 300ms;
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

//Form.js
export const CitationContainer = styled.div`
  margin: 1em auto;
  padding: 1.5em;
  background: #f76c6c;
  color: whitesmoke;
  border-radius: 5px;
  border: 2px solid #374785;
  text-align: center;

  label {
    font-family: "Noto Serif SC", serif;
    font-weight: bold;
    display: inline-block;
  }

  input {
    padding: 0.2em;
    border-radius: 2px;
    &:focus {
      border: 1px solid #374785;
    }
  }

  svg {
    float: right;
  }

  hr {
    border-top: 1px solid #374785;
    border-bottom: 1px solid #374785;
  }

  div.form-container {
    padding: 1em auto;
    width: auto;
    margin: 0 auto 1em auto;
    color: whitesmoke;
    border: 1px solid transparent;
  }
`;

export const FlexForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 1em;
`;
