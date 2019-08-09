import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { BasicInputDemo } from "../components/Input/BasicInput";
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
