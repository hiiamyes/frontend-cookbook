import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "src/components/Input/Checkbox";
import SearchInputDemo from "src/components/Input/SearchInput/demo";
import FormInputDemo from "src/components/Input/FormInput/demo";
import BasicInput from "src/components/Input/BasicInput";
import { MoneyInputDemo } from "src/components/Input/MoneyInput";
import { TwoFAInputDemo } from "src/components/Input/TwoFAInput";
import NumberInputDemo from "src/components/Input/NumberInput/demo";

export default {
  title: "Input",
};

const Layout = styled.div`
  padding: 15px;
`;

export const checkbox = () => {
  const [checked, setChecked] = useState(null);
  const onChange = (e) => {
    setChecked(e.target.checked);
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

export const BasicInputDemo = () => {
  const [value, setValue] = useState(null);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Layout>
      <BasicInput icon="search" value={value} onChange={onChange} />
      <div>{value}</div>
      <br />
      <BasicInput />
      <br />
      <BasicInput disabled />
      <br />
      <BasicInput loading />
    </Layout>
  );
};

export const TwoFAInput = () => {
  return <TwoFAInputDemo />;
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

export const NumberInput = () => {
  return <NumberInputDemo />;
};
