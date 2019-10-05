import React, { useState, createRef } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";

const FormInput = props => {
  let { defaultValue = "", onChange } = props;
  const [focus, setFocus] = useState(false);
  const inputRef = createRef();
  const labelRef = createRef();

  const deBouncedOnChange = debounce(150, value => {
    onChange(value);
  });

  const _onChange = e => {
    deBouncedOnChange(e.target.value);
  };

  return (
    <Style
      className={`${focus ? "focus" : ""}`}
      onClick={() => inputRef.current.focus()}
    >
      <label ref={labelRef}>label</label>
      <input
        focus={focus}
        onFocus={() => {
          labelRef.current.classList.add("active");
          inputRef.current.classList.add("active");
          setFocus(true);
        }}
        onBlur={() => {
          if (inputRef.current.value === "") {
            labelRef.current.classList.remove("active");
            inputRef.current.classList.remove("active");
          }
          setFocus(false);
        }}
        defaultValue={defaultValue}
        ref={inputRef}
        onChange={_onChange}
      />
    </Style>
  );
};

export default FormInput;
