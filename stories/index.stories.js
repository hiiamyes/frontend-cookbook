import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { MoneyInputDemo } from "../components/Input/MoneyInput";
import "../styles/global-style.css";
const Layout = styled.div`
  padding: 15px;
`;
storiesOf("Input", module).add("MoneyInput", () => (
  <Layout>
    <MoneyInputDemo />
  </Layout>
));
