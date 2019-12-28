import React, { createRef } from "react";
import FAIcon from "../FAIcon";
import Style from "./style";

const FilePicker = props => {
  const inputRef = createRef();
  let { picker = <DefaultPicker />, onChange } = props;
  const onClick = () => inputRef.current.click();
  return (
    <Style>
      {React.cloneElement(picker, { onClick })}
      <input
        ref={inputRef}
        multiple
        type="file"
        onChange={e => {
          if (onChange) onChange(e.target.files);
        }}
      />
    </Style>
  );
};

export default FilePicker;

const DefaultPicker = props => {
  const { onClick } = props;
  return (
    <div className="picker" onClick={onClick}>
      <FAIcon icon="cloud-upload-alt" />
    </div>
  );
};
