import React, { useState } from "react";
import BasicSelect from "./index";

const options = [
  {
    value: "a",
    label: "A",
  },
  {
    value: "b",
    label: "B",
  },
];

const BasicSelectDemo = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div>
      <div style={{ width: "250px" }}>
        <BasicSelect
          value={value}
          options={options}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <br />
      <div style={{ width: "500px" }}>
        <BasicSelect
          value={value2}
          options={options}
          onChange={(value2) => {
            setValue2(value2);
          }}
        />
      </div>
    </div>
  );
};

export default BasicSelectDemo;
