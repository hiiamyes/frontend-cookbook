import React from "react";
import Style from "./style";

const TimePicker = (props) => {
  const { value, onChange } = props;
  const [hour, minute] = value.split(":");
  return (
    <Style>
      <select
        value={hour}
        onChange={(e) => {
          onChange(e.target.value + ":" + minute);
        }}
      >
        {[...new Array(24)].map((_, i) => {
          const value = `${i}`.padStart(2, "0");
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      <div>:</div>
      <select
        value={minute}
        onChange={(e) => {
          onChange(hour + ":" + e.target.value);
        }}
      >
        {[...new Array(60)].map((_, i) => {
          const value = `${i}`.padStart(2, "0");
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

export default TimePicker;
