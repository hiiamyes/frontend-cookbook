import React from "react";
import classnames from "classnames";
import Style from "./style";

const NativeSelect = (props) => {
  const { className, value, options, children, ...rest } = props;
  return (
    <Style className={classnames(className)} {...rest}>
      <div>{children}</div>
      <select value={value}>
        {options.map((option, optionIndex) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Style>
  );
};

export default NativeSelect;
