import styled from "styled-components";

export const Button = styled.button`
  background: ${props => props.color};
  padding: 0 .5em;
  color: whitesmoke;
  width: auto;
  height: 20px;
  border: none;
  margin: 2.2em 0;
  position: relative;
  border-radius: 5px;
   &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition-duration: 300ms;
   }
`;
