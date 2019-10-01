import React, { useState } from "react";
import BasicUploader from "./index";

const BasicUploaderDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = value => {
    setValue(value);
  };
  return <BasicUploader value={value} onChange={onChange} />;
};

export default BasicUploaderDemo;
