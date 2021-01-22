import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import classnames from "classnames";
import FAIcon from "src/components/FAIcon";
import IconButton from "src/components/Buttons/IconButton";
import Style from "./style";

const BasicSelect = (props) => {
  const theme = useContext(ThemeContext);
  const textInput = React.createRef();
  const [focus, setFocus] = useState(false);
  const [optionsVisible, setOptionsVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [hoveredOptionValue, setHoveredOptionValue] = useState(
    props.options[0],
  );

  const { value, options, onChange, clearable } = props;
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
  const noOption = !options.find((option) =>
    new RegExp(inputValue, "gi").test(option.label),
  );
  return (
    <Style
      className={classnames("select", { focus })}
      actionsCount={clearable ? 2 : 1}
      onClick={(e) => {
        // setFocus(true);
        // setOptionsVisible(true);
        // setInputFocus(true);
        // setInputValue("");
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
      <div className="actions">
        {clearable && (
          <IconButton
            icon="times"
            color={theme.colorEnable}
            onClick={() => {
              const customEvent = new CustomEvent("select", {
                detail: { value: null },
              });
              onChange(customEvent);
            }}
          />
        )}
        <IconButton
          icon="angle-down"
          color={theme.colorEnable}
          onClick={() => {
            setFocus(true);
            setOptionsVisible(true);
            setInputFocus(true);
          }}
        />
      </div>
      <div
        className="no-option"
        style={{
          visibility: noOption ? "visible" : "hidden",
        }}
      >
        No result
      </div>
      <div
        className="options"
        style={{
          visibility: !noOption && optionsVisible ? "visible" : "hidden",
        }}
      >
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
              const customEvent = new CustomEvent("select", {
                detail: { value: option.value },
              });
              onChange(customEvent);
            }}
          >
            {option.label}
          </div>
        ))}
      </div>
    </Style>
  );
};

BasicSelect.propTypes = {
  value: PropTypes.object.isRequired,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  clearable: PropTypes.bool,
};

BasicSelect.defaultProps = {
  value: null,
  clearable: false,
};

export default BasicSelect;
