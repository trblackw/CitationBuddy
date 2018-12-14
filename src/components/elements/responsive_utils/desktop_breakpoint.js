import React from "react";
import { object } from "prop-types";
import Breakpoint from "./breakpoint";

const Desktop = ({ children }) => (
  <Breakpoint name="desktop">{children}</Breakpoint>
);

Desktop.propTypes = {
  children: object
};

export default Desktop;
