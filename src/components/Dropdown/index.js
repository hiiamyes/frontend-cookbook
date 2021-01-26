import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";
import classnames from "classnames";
import IconButton from "src/components/Buttons/IconButton";
import TextButton from "src/components/Buttons/TextButton";
import Style from "./style";

const Dropdown = (props) => {
  const theme = useContext(ThemeContext);
  const { className, options, onOptionClick, ...rest } = props;
  const [on, setOn] = useState(false);

  return (
    <Style className={classnames("dropdown", className, { on })} {...rest}>
      <IconButton
        icon="ellipsis-h"
        color={theme.colorEnable}
        onClick={() => {
          setOn(!on);
        }}
      />
      <div className="options">
        {options.map(({ value, label }) => {
          return (
            <TextButton key={value} onClick={() => onOptionClick(value)}>
              {label}
            </TextButton>
          );
        })}
      </div>
    </Style>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array,
  onOptionClick: PropTypes.func,
};

export default Dropdown;
