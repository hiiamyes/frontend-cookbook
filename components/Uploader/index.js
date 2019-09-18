import React, { useState, createRef } from "react";
import Style from "./style";

const BasicUploader = props => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInput = createRef();
  let { value } = props;
  const onChange = e => {
    props.onChange(e.target.value);
  };
  const reader = new FileReader();
  reader.onload = e => {
    setPreview(e.target.result);
  };
  return (
    <Style onClick={() => fileInput.current.click()}>
      {!preview && <div className="label">Upload</div>}
      {preview && <img className="preview" src={preview}></img>}
      {uploading && <div className="uploading">Uploading</div>}
      <input
        ref={fileInput}
        type="file"
        onChange={e => {
          const file = e.target.files[0];
          setUploading(true);
          reader.readAsDataURL(file);
          setTimeout(() => {
            setUploading(false);
          }, 5000);
        }}
      />
    </Style>
  );
};

export default BasicUploader;
