import React from "react";
import Style from "./style";

const Error = props => {
  const { children } = props;
  return <Style>{children}</Style>;
};

export default Error;
