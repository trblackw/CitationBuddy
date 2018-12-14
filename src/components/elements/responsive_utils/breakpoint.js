import React from "react";
import MediaQuery from "react-responsive";
import { string, object } from "prop-types";

const Breakpoint = ({ name, children }) => {
  const breakpoints = {
    desktop: "(min-width: 1025px)",
    tablet: "(min-width: 768px) and (max-width: 1024px)",
    phone: "(max-width: 767px)"
  };
  const breakpoint = breakpoints[name] || breakpoints.desktop;

  return (
    <MediaQuery name={name} query={breakpoint}>
      {children}
    </MediaQuery>
  );
};

Breakpoint.propTypes = {
  name: string,
  children: object
};

export default Breakpoint;
