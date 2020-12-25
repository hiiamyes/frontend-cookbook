import React, { useState, useEffect, useCallback } from "react";
import classnames from "classnames";
import Style from "./style";

const OutlineButton = (props) => {
  const { loading, disabled, onClick, children, ...rest } = props;
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);

  const className = classnames({
    disabled,
    loading,
    hover,
    pressed,
    focused,
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
      className={className}
      onFocus={(e) => {
        setFocused(true);
      }}
      onBlur={(e) => {
        setFocused(false);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
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
      onClick={(e) => {
        !disabled && !loading && onClick && onClick(e);
      }}
      {...rest}
    >
      {loading ? "loading..." : children}
    </Style>
  );
};

export default OutlineButton;
