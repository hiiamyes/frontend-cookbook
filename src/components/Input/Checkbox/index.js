import React, { createRef } from "react";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const Checkbox = (props) => {
  const { checked = false, onChange, ...rest } = props;
  const inputRef = createRef();

  const onClick = () => {
    inputRef.current.click();
  };

  return (
    <Style
      type="checkbox"
      className={`${checked ? "checked" : ""}`}
      onClick={onClick}
    >
      <input
        ref={inputRef}
        type="checkbox"
        onChange={onChange}
        {...rest}
      ></input>
      <FAIcon size="large" icon={checked ? "square" : "check-square"} />
    </Style>
  );
};

export default Checkbox;
