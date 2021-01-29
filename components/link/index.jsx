import React from "react";
import { Link as LinkS } from "react-scroll";

const Link = ({ children, ...rest }) => {
  return (
    <LinkS {...rest} spy={true} smooth={true} offset={-80} duration={500}>
      {children}
    </LinkS>
  );
};

export default Link;
