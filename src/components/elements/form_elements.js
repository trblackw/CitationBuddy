import styled from "styled-components";
import { device } from "./responsive";

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
  border-radius: 5px;
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

export const CitationContainer = styled.div`
  margin: 1em auto;
  padding: 1.5em;
  background: #f76c6c;
  color: whitesmoke;
  border-radius: 5px;
  border: 2px solid #374785;

  input {
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

  /* 1024px */
  @media ${device.laptop} {
     text-align: center;
     label {

     }
     max-width: 85%;
     [name="first"], [name="last"] {
        width: 200px;
        margin: 1em .8em;
        padding: .2em;
     }
     [name='middle'] {
        width: 80px;
        margin: 1em .8em;
     }

  }


  /*display: flex;
  flex-direction: row;

  input[name="first"],
  input[name="last"] {
    max-width: 30%;
  }

  input[name="middle"] {
    max-width: 10%;
  }

  input[name="title"] {
    max-width: 90%;
  }

  input[name="publisher"] {
    max-width: 50%;
  }

  input[name="location"] {
    max-width: 35%;
  }

  input[name="year"] {
    max-width: 25%;
  }

  @media ${device.tablet} {
    max-width: 700px;
  }

  @media ${device.mobileM} {
    max-width: 95%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    input[name="first"],
    input[name="last"] {
      width: 100%;
    }

    input[name="middle"] {
      width: 100%;
    }

    input[name="title"] {
      width: 100%;
    }

    input[name="publisher"] {
      width: 100%;
    }

    input[name="location"] {
      width: 100%;
    }

    input[name="year"] {
      width: 100%;
    }
  }

  label {
    margin-top: 0.5em;
  }

  input {
    display: inline-block;
    margin: 0.5em 1em;
    padding: 0.2em 0.4em;
    border-radius: 3px;
  }

  svg {
    float: right;
  }

  hr {
    border-top: 1px solid #374785;
    border-bottom: 1px solid #374785;
  } */
`;

export const FlexForm = styled.form`
  display: flex;
  justify-content: center;
  margin: 1em;
`;
