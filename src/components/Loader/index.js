import React from "react";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const Loader = (props) => {
  const { icon = "spinner" } = props;
  return (
    <Style>
      <FAIcon icon={icon}></FAIcon>
    </Style>
  );
};

export default Loader;
