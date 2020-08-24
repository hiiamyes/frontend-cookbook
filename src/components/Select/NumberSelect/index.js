import React from "react";
import Style from "./style";

const NumberSelect = (props) => {
  const { min, max, value, onChange } = props;
  return (
    <Style>
      <select
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      >
        {[...new Array(max - min + 1)].map((_, i) => {
          const value = `${min + i}`;
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </Style>
  );
};

export default NumberSelect;
