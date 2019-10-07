import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

const ButtonDemo = () => {
  return (
    <div>
      <input />
      <Button onClick={action("onClick")}>Button</Button>
    </div>
  );
};

export default ButtonDemo;
