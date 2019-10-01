import React, { useState } from "react";
import SearchInput from "./index";

const SearchInputDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = value => {
    setValue(value);
  };
  return <SearchInput value={value} onChange={onChange} />;
};

export default SearchInputDemo;
