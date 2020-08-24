import React from "react";
import styled from "styled-components";
import OutlineButton from "src/components/Buttons/OutlineButton";
import TextButton from "src/components/Buttons/TextButton";

export default {
  title: "Button",
};

const Layout = styled.div`
  padding: 15px;
`;

export const Outline = () => {
  return (
    <Layout>
      <OutlineButton>Outline Button</OutlineButton>
    </Layout>
  );
};

export const Text = () => {
  return (
    <Layout>
      <TextButton>Text Button</TextButton>
    </Layout>
  );
};
