import React, { useState } from "react";
import BasicSelect from "./index";

const options = [
  {
    value: 13,
    label: "九九山莊",
  },
  {
    value: 223,
    label: "三六九山莊",
  },
];

const BasicSelectDemo = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div>
      <div style={{ width: "250px", height: "200px", overflowY: "scroll" }}>
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
