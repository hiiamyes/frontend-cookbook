import React from "react";
import { action } from "@storybook/addon-actions";
import FilePicker from "./index";

const FilePickerDemo = () => {
  return (
    <div>
      <FilePicker onChange={action("onChange")} />
      <br></br>
      <FilePicker
        picker={<button>File Picker</button>}
        onChange={action("onChange")}
      />
    </div>
  );
};

export default FilePickerDemo;
