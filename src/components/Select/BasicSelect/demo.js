import React, { useState } from "react";
import BasicSelect from "./index";
import timezoneNames from "./timezoneNames.json";

const BasicSelectDemo = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <BasicSelect
        value={value}
        options={timezoneNames}
        onChange={value => {
          setValue(value);
        }}
      />
    </div>
  );
};

export default BasicSelectDemo;
