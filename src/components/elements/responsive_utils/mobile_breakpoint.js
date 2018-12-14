import React from "react";
import Breakpoint from "./breakpoint";
import { object } from "prop-types";

const Mobile = ({ children }) => (
  <Breakpoint name="phone">{children}</Breakpoint>
);

Mobile.propTypes = {
  children: object
};

export default Mobile;
