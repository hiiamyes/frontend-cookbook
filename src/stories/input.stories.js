import React, { useState } from "react";
import Checkbox from "src/components/Input/Checkbox";
import SearchInputDemo from "src/components/Input/SearchInput/demo";
import FormInputDemo from "src/components/Input/FormInput/demo";
import { BasicInputDemo } from "src/components/Input/BasicInput";
import { MoneyInputDemo } from "src/components/Input/MoneyInput";

export default {
  title: "Input",
};

export const checkbox = () => {
  const [checked, setChecked] = useState(null);
  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

export const BasicInput = () => {
  return <BasicInputDemo />;
};

export const MoneyInput = () => {
  return <MoneyInputDemo />;
};

export const SearchInput = () => {
  return <SearchInputDemo />;
};

export const FormInput = () => {
  return <FormInputDemo />;
};
