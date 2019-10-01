import React, { useState } from "react";
import Style from "./style";

const BasicInput = props => {
  let { value } = props;
  const onChange = e => {
    props.onChange(e.target.value);
  };
  return <Style value={value} onChange={onChange} />;
};

const BasicInputDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = value => {
    setValue(value);
  };
  return <BasicInput value={value} onChange={onChange} />;
};

export default BasicInput;
export { BasicInputDemo };
