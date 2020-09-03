import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Button from "src/components/Buttons/Button";
import FAIcon from "src/components/FAIcon";
import Drawer from "./index";

const DrawerDemo = () => {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <div>
      <Button onClick={open}>
        <FAIcon icon="cog"></FAIcon>
      </Button>
      <Drawer visible={visible} onClose={close}></Drawer>
    </div>
  );
};

export default DrawerDemo;
