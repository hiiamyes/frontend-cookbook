import React, { useState } from "react";
import NumberInput from "src/components/Input/NumberInput";

const NumberInputDemo = () => {
  const [value, setValue] = useState(undefined);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <NumberInput value={value} onChange={onChange} />
      <br />
      <NumberInput disabled />
      <br />
      <NumberInput loading />
    </div>
  );
};

export default NumberInputDemo;
