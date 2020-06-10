import React, { useState } from "react";
import Style from "./style";

const BasicInput = (props) => {
  let { value, error, onChange, ...rest } = props;
  return (
    <Style
      className={`${error ? "error" : ""}`}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

const BasicInputDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return <BasicInput value={value} onChange={onChange} />;
};

export default BasicInput;
export { BasicInputDemo };
