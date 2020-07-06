import React, { useState } from "react";
import classnames from "classnames";
import Style from "./style";

const NumberInput = (props) => {
  const { disabled, loading, error, value = "", onChange, ...rest } = props;
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);

  const className = classnames({
    disabled,
    loading,
    hover,
    focused,
    error,
  });

  return (
    <Style
      className={className}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      {...rest}
    >
      <input
        value={value}
        onChange={(e) => {
          !isNaN(e.target.value) && onChange(e);
        }}
        onFocus={(e) => {
          setFocused(true);
        }}
        onBlur={(e) => {
          setFocused(false);
        }}
      />
    </Style>
  );
};

export default NumberInput;
