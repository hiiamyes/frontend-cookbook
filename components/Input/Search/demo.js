import React, { useState } from "react";
import Search from "./index";

const SearchDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = value => {
    setValue(value);
  };
  return <Search value={value} onChange={onChange} />;
};

export default SearchDemo;
