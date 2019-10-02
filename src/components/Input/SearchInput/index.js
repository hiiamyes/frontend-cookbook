import React, { createRef } from "react";
import FAIcon from "src/components/FAIcon";
import { debounce } from "lodash/fp";
import Style from "./style";

const Search = props => {
  let { defaultValue, onChange } = props;
  const inputRef = createRef();

  const deBouncedOnChange = debounce(150, value => {
    onChange(value);
  });

  const _onChange = e => {
    deBouncedOnChange(e.target.value);
  };

  const onClear = e => {
    inputRef.current.value = "";
    e.preventDefault();
    inputRef.current.focus();
    deBouncedOnChange("");
  };

  return (
    <Style>
      <div className="search">
        <FAIcon icon="search" />
      </div>
      <input defaultValue={defaultValue} ref={inputRef} onChange={_onChange} />
      <button className="clear" onMouseDown={onClear} onKeyDown={onClear}>
        <FAIcon icon="times" />
      </button>
    </Style>
  );
};

export default Search;
