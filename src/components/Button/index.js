import React from "react";
import Style from "./style";

const Button = props => {
  let { children, onClick } = props;
  return <Style onClick={onClick}>{children}</Style>;
};

export default Button;
