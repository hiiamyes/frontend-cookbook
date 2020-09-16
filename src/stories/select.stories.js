import React, { useState } from "react";
import styled from "styled-components";
import FAIcon from "src/components/FAIcon";
import BasicSelect from "src/components/Select/BasicSelect";
import NativeSelect from "src/components/Select/NativeSelect";
import TimezoneNameSelect from "src/components/Select/TimezoneNameSelect";
import LanguagePicker from "src/components/Select/LanguagePicker";

export default {
  title: "Select",
};

const Layout = styled.div`
  padding: 15px;
`;

export const Basic = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const options = [
    {
      value: 13,
      label: "九九山莊",
    },
    {
      value: 223,
      label: "三六九山莊",
    },
  ];
  return (
    <Layout>
      <div style={{ width: "250px", height: "200px", overflowY: "scroll" }}>
        <BasicSelect
          value={value}
          options={options}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </div>
      <br />
      <div style={{ width: "500px" }}>
        <BasicSelect
          value={value2}
          options={options}
          onChange={(value2) => {
            setValue2(value2);
          }}
        />
      </div>
    </Layout>
  );
};

export const Native = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      value: 13,
      label: "九九山莊",
    },
    {
      value: 223,
      label: "三六九山莊",
    },
  ];
  return (
    <Layout>
      <NativeSelect
        value={value}
        options={options}
        onChange={(value) => {
          setValue(value);
        }}
      >
        <FAIcon icon="language"></FAIcon>
      </NativeSelect>
    </Layout>
  );
};

export const TimezoneName = () => {
  return (
    <Layout>
      <TimezoneNameSelect />
    </Layout>
  );
};

export const Language = () => {
  return (
    <Layout>
      <LanguagePicker />
    </Layout>
  );
};
