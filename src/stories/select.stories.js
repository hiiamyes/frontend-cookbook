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
  display: grid;
  grid-gap: 5px;
`;

export const Basic = () => {
  const [value, setValue] = useState("");
  const [value30Optinos, setValue30Options] = useState("");
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
      <h3>2 options</h3>
      <div style={{ width: "250px" }}>
        <BasicSelect
          value={value}
          options={options}
          onChange={(e) => {
            setValue(e.detail.value);
          }}
        />
      </div>
      <div style={{ width: "250px" }}>
        <BasicSelect
          clearable
          value={value}
          options={options}
          onChange={(e) => {
            setValue(e.detail.value);
          }}
        />
      </div>
      <div style={{ width: "500px" }}>
        <BasicSelect
          value={value2}
          options={options}
          onChange={(e) => {
            setValue2(e.detail.value);
          }}
        />
      </div>
      <h3>30 options</h3>
      <div style={{ width: "250px" }}>
        <BasicSelect
          value={value30Optinos}
          options={[...new Array(30)].map((_, i) => ({ value: i, label: i }))}
          onChange={(e) => {
            setValue30Options(e.detail.value);
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
        onChange={(e) => {
          setValue(e.detail.value);
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
