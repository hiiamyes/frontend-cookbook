import React, { useState } from "react";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const Search = props => {
  let { value } = props;
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return (
    <Style>
      <div className="icon">
        <FAIcon icon="search" />
      </div>
      <input value={value} onChange={onChange} />
    </Style>
  );
};

export default Search;
