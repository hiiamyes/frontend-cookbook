import React from "react";
import BasicSelect from "src/components/Select/BasicSelect";

const LanguagePicker = props => {
  const { value, onChange } = props;
  const options = ["English", "中文 - 繁體"];
  return <BasicSelect value={value} options={options} onChange={onChange} />;
};

export default LanguagePicker;
