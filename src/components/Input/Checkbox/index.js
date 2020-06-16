import React, { createRef } from "react";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const Checkbox = ({ checked = false, onChange }) => {
  const inputRef = createRef();

  const onClick = () => {
    inputRef.current.click();
  };

  return (
    <Style className={`${checked ? "checked" : ""}`} onClick={onClick}>
      <input ref={inputRef} type="checkbox" onChange={onChange}></input>
      <FAIcon size="large" icon={checked ? "square" : "check-square"} />
    </Style>
  );
};

export default Checkbox;
