import React from "react";
import styled from "styled-components";
import Tooltip from "src/components/Tooltip";
import IconButton from "src/components/Buttons/IconButton";

export default {
  title: "Tooltip",
};

const Layout = styled.div`
  padding: 15px;
`;

export const checkbox = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <Tooltip tip="I'm a tooltip">
        <IconButton icon="chevron-left" />
      </Tooltip>
    </div>
  );
};
