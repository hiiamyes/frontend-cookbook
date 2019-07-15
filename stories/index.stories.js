import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";
const Layout = styled.div`
  padding: 15px;
`;
storiesOf("Input", module).add("MoneyInput", () => (
  <Layout>
  </Layout>
));
