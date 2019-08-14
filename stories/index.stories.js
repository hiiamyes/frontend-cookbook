import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import "antd/dist/antd.css";

import { BasicInputDemo } from "../components/Input/BasicInput";
import FAIcon from "../components/FAIcon";
import BasicSelect from "../components/Select/BasicSelect";
import TimezoneNameSelect from "../components/Select/TimezoneNameSelect";
import { MoneyInputDemo } from "../components/Input/MoneyInput";
import "../styles/global-style.css";

const Layout = styled.div`
  padding: 15px;
`;

storiesOf("Input", module)
  .add("BasicInput", () => (
    <Layout>
      <BasicInputDemo />
    </Layout>
  ))
  .add("MoneyInput", () => (
    <Layout>
      <MoneyInputDemo />
    </Layout>
  ));

storiesOf("Icon", module).add("FontAwesomeIcon", () => <FAIcon icon="cog" />);

storiesOf("Select", module)
  .add("BasicSelect", () => {
    return (
      <Layout>
        <BasicSelect />
      </Layout>
    );
  })
  .add("TimezoneNameSelect", () => (
    <Layout>
      <TimezoneNameSelect />
    </Layout>
  ));

storiesOf("Icon", module).add("FontAwesomeIcon", () => <FAIcon icon="cog" />);
