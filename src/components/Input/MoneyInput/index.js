import React, { useState, useLayoutEffect, useEffect } from "react";
import { InputNumber } from "antd";
import Style from "./style";
import { onInputKeyDown, onInputKeyUp, onInputChange } from "./events";
import { getFormattedValue } from "./utils";

const MoneyInput = props => {
  let {
    value,
    max = 1e20,
    minUnit = "1",
    onChange,
    disabled = false,
    placeholder = "Input amount"
  } = props;
  const inputRef = React.createRef();
  const [formattedValue, setFormattedValue] = useState("");
  const [key, setKey] = useState(null);
  const [charBeforeCaret, setCharBeforeCaret] = useState("");
  const [charAfterCaret, setCharAfterCaret] = useState("");
  const [caretPositionFromEnd, setCaretPositionFromEnd] = useState(0);

  useEffect(() => {
    setFormattedValue(getFormattedValue({ value, minUnit }));
  }, []);

  useLayoutEffect(() => {
    const target = inputRef.current;
    let selectionStart = target.value.length - caretPositionFromEnd;
    if (selectionStart < 0) selectionStart = 0;
    target.setSelectionRange(selectionStart, selectionStart);
  }, [formattedValue]);

  return (
    <Style>
      <input
        disabled={disabled}
        placeholder={placeholder}
        data-testid="money-input"
        type="tel"
        ref={inputRef}
        value={formattedValue}
        onKeyDown={onInputKeyDown({
          setKey,
          setCharBeforeCaret,
          setCharAfterCaret
        })}
        onKeyUp={onInputKeyUp}
        onChange={onInputChange({
          value,
          max,
          minUnit,
          key,
          charBeforeCaret,
          charAfterCaret,
          setCaretPositionFromEnd,
          setFormattedValue,
          onChange
        })}
      />
    </Style>
  );
};

const MoneyInputDemo = () => {
  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);
  const [value3, setValue3] = useState(null);
  const [value4, setValue4] = useState(null);

  return (
    <div>
      <div>Min unit = 100</div>
      <MoneyInput
        value={value}
        minUnit="100"
        onChange={value => {
          setValue(value);
        }}
      />

      <div>Min unit = 1</div>
      <MoneyInput
        value={value2}
        minUnit="1"
        onChange={value => {
          setValue2(value);
        }}
      />

      <div>Min unit = 0.01</div>
      <MoneyInput
        value={value3}
        minUnit="0.01"
        onChange={value => {
          setValue3(value);
        }}
      />

      <div>Antd</div>
      <InputNumber
        style={{ width: 200 }}
        value={value4}
        formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={value => value.replace(/\$\s?|(,*)/g, "")}
        onChange={v => setValue4(v)}
      />
    </div>
  );
};

export default MoneyInput;
export { MoneyInputDemo };
