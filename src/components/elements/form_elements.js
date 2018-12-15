import styled from "styled-components";
import { media } from "./responsive_utils/breakpoint";

export const LandingContainer = styled.div`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

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
  flex-wrap: wrap;
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

  ${media.tablet`
  width: 80%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  text-align: center;
  
  `}

  ${media.phone`
margin: .6em auto;
width: 90%;
flex-wrap: wrap;

div.select {
   padding: .3em;
   text-align: center;

   select {
      margin-top: .5em;
      width: 60%;
      padding: .2em;
      background: #fff;

   }
}
`}
`;

export const Button = styled.button`
  background: ${props => props.color};
  padding: 0 0.5em;
  color: whitesmoke;
  width: 50px;
  height: 20px;
  border: none;
  margin: 0.5em auto;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 300ms;
  }
`;

export const Manuals = styled.div`
  ${media.phone`
 width: 90%;
 font-size: 0.9em;
 text-align: left;
 `}
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
   background: #f76c6c;
  color: whitesmoke;
  border-radius: 5px;
  border: 2px solid #374785;
  padding: 1.3em;
  label {
    font-family: "Noto Serif SC", serif;
    font-weight: bold;
    font-size: small;
    display: inline-block;
  }
  ${media.desktop`
   width: 80%;
   
   `}

   ${media.tablet`
   width: 90%;
   border: 1px solid blue;
   margin: .7em auto;

   div.form-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
   }
   `}

   ${media.phone`
   width: 90%;
   border: 1px solid red;
   input {
      width: 100%;
   }
   `}

  /* margin: 1em auto;
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

  ${media.tablet`
  width: 85%;
  display: flex;
  flex-direction: column;

  div.form-container {
     display: flex;
     flex-direction: column;
  }
  `} */
`;

export const FlexForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 1em;
`;
