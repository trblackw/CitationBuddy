import React from "react";
import Breakpoint from "./breakpoint";
import { object } from "prop-types";

const Tablet = ({ children }) => (
  <Breakpoint name="tablet">{children}</Breakpoint>
);

Tablet.propTypes = {
  children: object
};

export default Tablet;
