import styled from "styled-components";

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