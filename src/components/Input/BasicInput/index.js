import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const BasicInput = (props) => {
  const { disabled, loading, error, icon, ...rest } = props;

  const [hover, setHover] = useState(false);
  const [focus, setFocuse] = useState(false);

  const className = classnames({
    disabled,
    loading,
    hover,
    focus,
    error,
  });

  return (
    <Style
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {icon && <FAIcon icon={icon}></FAIcon>}
      <input
        disabled={disabled}
        {...rest}
        onFocus={(e) => {
          setFocuse(true);
        }}
        onBlur={(e) => {
          setFocuse(false);
        }}
      />
    </Style>
  );
};

BasicInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

export default BasicInput;
