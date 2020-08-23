import React, { useState, useEffect } from "react";
import classnames from "classnames";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const BasicSelect = (props) => {
  const textInput = React.createRef();
  const [focus, setFocus] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [hoveredOptionValue, setHoveredOptionValue] = useState(
    props.options[0],
  );

  const { value, options, onChange } = props;
  useEffect(() => {
    const option = options.find((option) => option.value === value);
    if (option) {
      setInputValue(option.label);
    } else {
      setInputValue("");
    }
  }, [value, options]);

  // useEffect(() => {
  //   const keyDownListener = (e) => {
  //     const os = options.filter((option) =>
  //       new RegExp(inputValue, "gi").test(option.value),
  //     );
  //     const index = os.indexOf(hoveredOptionValue);
  //     switch (e.keyCode) {
  //       case 38:
  //         if (index !== 0) {
  //           setHoveredOptionValue(os[index - 1]);
  //         }
  //         break;
  //       case 40:
  //         if (index !== os.length - 1) {
  //           setHoveredOptionValue(os[index + 1]);
  //         }
  //         break;
  //       case 27: // esc
  //         setOptionsVisible(false);
  //         break;
  //       case 13: // enter
  //         if (optionsVisible) {
  //           onChange(hoveredOptionValue);
  //           setOptionsVisible(false);
  //         } else {
  //           setInputValue("");
  //           setOptionsVisible(true);
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //   };
  //   window.addEventListener("keydown", keyDownListener);
  //   return () => {
  //     window.removeEventListener("keydown", keyDownListener);
  //   };
  // }, [hoveredOptionValue, optionsVisible]);

  return (
    <Style
      className={classnames("select", { focus })}
      onClick={(e) => {
        setFocus(true);
        setOptionsVisible(true);
        setInputFocus(true);
        setInputValue("");
      }}
    >
      <input
        value={inputValue}
        placeholder="Select"
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={(e) => {
          setOptionsVisible(true);
          setFocus(true);
          setInputValue("");
        }}
        onBlur={(e) => {
          setOptionsVisible(false);
          setFocus(false);
        }}
      />
      <FAIcon icon="angle-down" />
      {optionsVisible && (
        <div className="options">
          {options.map((option, optionIndex) => (
            <div
              className={classnames("option", {
                hover: option.value === hoveredOptionValue,
                select: option.value === value,
              })}
              key={option.value}
              value={option.value}
              style={{
                display: new RegExp(inputValue, "gi").test(option.label)
                  ? "block"
                  : "none",
              }}
              onMouseDown={(e) => {
                onChange(option.value);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </Style>
  );
};

export default BasicSelect;
