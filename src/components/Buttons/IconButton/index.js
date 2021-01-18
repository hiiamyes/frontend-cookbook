import React, { useState, useEffect, useCallback, forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Loader from "src/components/Loader";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const IconButton = forwardRef((props, ref) => {
  const {
    loading,
    disabled,
    onClick,
    icon,
    children,
    withBackground,
    size,
    onMouseEnter,
    onMouseLeave,
    ...rest
  } = props;
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);

  const className = classnames({
    disabled,
    loading,
    hover,
    pressed,
    focused,
    "with-background": withBackground,
  });

  const windowMouseUp = useCallback(() => {
    setPressed(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mouseup", windowMouseUp);
    return () => {
      window.removeEventListener("mouseup", windowMouseUp);
    };
  }, [windowMouseUp]);

  return (
    <Style
      ref={ref}
      className={className}
      onFocus={(e) => {
        setFocused(true);
      }}
      onBlur={(e) => {
        setFocused(false);
      }}
      onMouseEnter={(e) => {
        setHover(true);
        onMouseEnter && onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        setHover(false);
        onMouseLeave && onMouseLeave(e);
      }}
      onMouseDown={() => {
        setPressed(true);
      }}
      onMouseUp={() => {
        setPressed(false);
      }}
      onTouchStart={(e) => {
        setPressed(true);
      }}
      onTouchEnd={(e) => {
        // e.preventDefault();
        setPressed(false);
      }}
      onClick={(e) => onClick && onClick(e)}
      disabled={disabled || loading}
      size={size}
      {...rest}
    >
      {loading ? <Loader size={size} /> : <FAIcon icon={icon} size={size} />}
    </Style>
  );
});

IconButton.propTypes = {
  size: PropTypes.oneOf(["s", "m", "l"]),
  withBackground: PropTypes.bool.isRequired,
};

IconButton.defaultProps = {
  size: "m",
  withBackground: false,
};

export default IconButton;
