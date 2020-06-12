import React from "react";
import Style from "./style";

const Button = (props) => {
  let { children, onClick, loading, ...rest } = props;
  return (
    <Style onClick={onClick} {...rest}>
      {loading && <div>Loading...</div>}
      {!loading && children}
    </Style>
  );
};

export default Button;
