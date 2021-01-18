import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Style from "./style";

library.add(fas);

const FAIcon = (props) => {
  const { className, size, icon, color = "#000000" } = props;

  return (
    <Style className={classnames("icon", className)} size={size} color={color}>
      <FontAwesomeIcon icon={icon} />
    </Style>
  );
};

FAIcon.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["s", "m", "l"]),
  color: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

FAIcon.defaultProps = {
  size: "m",
  color: "#000000",
};

export default FAIcon;
