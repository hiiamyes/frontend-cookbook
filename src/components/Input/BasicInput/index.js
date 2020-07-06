import React, { useState } from "react";
import classnames from "classnames";
import Style from "./style";

const BasicInput = (props) => {
  const { disabled, loading, error, ...rest } = props;

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
        {...rest}
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

const BasicInputDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <BasicInput value={value} onChange={onChange} />
      <br />
      <BasicInput disabled />
      <br />
      <BasicInput loading />
    </div>
  );
};

export default BasicInput;
export { BasicInputDemo };
