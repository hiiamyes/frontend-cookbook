import React from "react";
import { action } from "@storybook/addon-actions";
import LanguagePicker from "./index";

const LanguagePickerDemo = () => {
  return <LanguagePicker onChange={action("onChange")} />;
};

export default LanguagePickerDemo;
