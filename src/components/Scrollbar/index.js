import React from "react";
import Style from "./style";

const Scrollbar = props => {
  let { children } = props;
  return <Style>{children}</Style>;
};

export default Scrollbar;
