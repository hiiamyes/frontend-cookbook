import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { debounce } from "lodash/fp";
import classnames from "classnames";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const DEBOUNCE_WAIT = 250; // ms

const BasicInput = (props) => {
  const { disabled, loading, error, value, onChange, icon, ...rest } = props;

  const [hover, setHover] = useState(false);
  const [focus, setFocuse] = useState(false);
  const [changeable, setChangeable] = useState(true);

  const className = classnames({
    disabled,
    loading,
    hover,
    focus,
    error,
  });

  const onCompositionStart = (e) => {
    setChangeable(false);
  };

  const onCompositionEnd = (e) => {
    setChangeable(true);
    onDebouncedChange(e);
  };

  const onInput = (e) => {
    if (changeable) {
      onDebouncedChange(e);
    }
  };

  const onDebouncedChange = useCallback(
    debounce(DEBOUNCE_WAIT, (e) => {
      onChange(e);
    }),
    [],
  );

  return (
    <Style
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {icon && <FAIcon icon={icon}></FAIcon>}
      <input
        disabled={disabled}
        {...rest}
        onFocus={(e) => {
          setFocuse(true);
        }}
        onBlur={(e) => {
          setFocuse(false);
        }}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
        onInput={onInput}
      />
    </Style>
  );
};

BasicInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

export default BasicInput;
