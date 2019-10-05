import React from "react";
import { action } from "@storybook/addon-actions";
import FromInput from "./index";

const FormInputDemo = () => {
  return <FromInput onChange={action("onChange")} />;
};

export default FormInputDemo;
