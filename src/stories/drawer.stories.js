import React from "react";
import styled from "styled-components";
import TextButton from "src/components/Buttons/TextButton";
import FAIcon from "src/components/FAIcon";
import Drawer from "src/components/Drawer";

export default {
  title: "Drawer",
};

const Layout = styled.div`
  padding: 15px;
`;

export const Default = () => {
  const { visible, openDrawer, closeDrawer } = Drawer.useDrawer();
  return (
    <Layout>
      <TextButton onClick={openDrawer}>
        <FAIcon icon="bars"></FAIcon>
      </TextButton>
      <Drawer visible={visible} onClose={closeDrawer}></Drawer>
    </Layout>
  );
};
