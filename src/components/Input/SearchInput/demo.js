import React from "react";
import { action } from "@storybook/addon-actions";
import SearchInput from "./index";

const SearchInputDemo = () => {
  return <SearchInput onChange={action("onChange")} />;
};

export default SearchInputDemo;
