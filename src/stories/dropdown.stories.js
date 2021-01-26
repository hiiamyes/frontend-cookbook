import React, { useState } from "react";
import Dropdown from "src/components/Dropdown";

export default {
  title: "Dropdown",
};

export const Basic = () => {
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
  return (
    <div>
      <div style={{ width: "250px" }}>
        <Dropdown
          options={options}
          onOptionClick={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};
