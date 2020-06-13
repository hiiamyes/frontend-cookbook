import React, { useState, useEffect, useCallback } from "react";
import Style from "./style";

const Button = (props) => {
  const { children, loading, disabled, onClick } = props;
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focused, setFocused] = useState(false);

  const className = disabled
    ? "disabled"
    : loading
    ? "loading"
    : `${hover && "hover"} ${pressed && "pressed"} ${focused && "focused"}`;

  const windowMouseUp = useCallback(() => {
    // console.log("window mouse up");
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
        // console.log("focus");
        setFocused(true);
      }}
      onBlur={(e) => {
        // console.log("blur");
        setFocused(false);
      }}
      onMouseEnter={() => {
        // console.log("mouse enter");
        setHover(true);
      }}
      onMouseLeave={() => {
        // console.log("mouse leave");
        setHover(false);
      }}
      onMouseDown={() => {
        // console.log("mouse down");
        setPressed(true);
      }}
      onMouseUp={() => {
        // console.log("mouse up");
        setPressed(false);
      }}
      onTouchStart={(e) => {
        // console.log("touch start");
        setPressed(true);
      }}
      onTouchEnd={(e) => {
        // console.log("touch end");
        e.preventDefault();
        setPressed(false);
      }}
      onClick={(e) => {
        !disabled && !loading && onClick && onClick(e);
      }}
    >
      {loading ? "loading..." : children}
    </Style>
  );
};

export default Button;
