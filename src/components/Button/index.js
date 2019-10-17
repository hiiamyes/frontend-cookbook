import React from "react";
import Style from "./style";

const Button = props => {
  let { children, onClick, ...others } = props;
  return (
    <Style onClick={onClick} {...others}>
      {children}
    </Style>
  );
};

export default Button;
