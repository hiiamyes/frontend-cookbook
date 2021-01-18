import React from "react";
import PropTypes from "prop-types";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const Loader = (props) => {
  const { icon = "spinner", size } = props;
  return (
    <Style size={size}>
      <FAIcon icon={icon} size={size}></FAIcon>
    </Style>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
};

Loader.defaultProps = {
  size: "m",
};

export default Loader;
