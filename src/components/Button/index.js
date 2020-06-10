import React from "react";
import Style from "./style";

const Button = (props) => {
  let { children, onClick, ...rest } = props;
  return (
    <Style onClick={onClick} {...rest}>
      {children}
    </Style>
  );
};

export default Button;
