import React from "react";
import styled from "styled-components";
import Tooltip from "src/components/Tooltip";

export default {
  title: "Tooltip",
};

const Layout = styled.div`
  padding: 15px;
`;

export const checkbox = () => {
  return <Tooltip />;
};
