import React, { useState, createRef } from "react";
import FAIcon from "../FAIcon";
import Style from "./style";

const BasicUploader = props => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [files, setFiles] = useState([]);
  const fileInput = createRef();
  let { value } = props;
  const onChange = e => {
    props.onChange(e.target.value);
  };

  for (let index = 0; index < files.length; index++) {
    const file = files[index];
    if (!file.previewURL) {
      const reader = new FileReader();
      reader.onload = e => {
        setFiles(prevFiles => {
          let newFiles = prevFiles.slice();
          newFiles[index].previewURL = e.target.result;
          return newFiles;
        });
      };
      reader.readAsDataURL(file.content);
    }
  }

  const onUploaderClick = () => fileInput.current.click();

  return (
    <Style>
      {!preview && (
        <div className="uploader" onClick={onUploaderClick}>
          <FAIcon icon="cloud-upload-alt" />
        </div>
      )}
      {files.map(file => {
        if (file.previewURL) {
          return (
            <div className="preview">
              <img key={file.previewUrl} src={file.previewURL}></img>
            </div>
          );
        } else {
          return <div>loading</div>;
        }
      })}
      {uploading && <div className="uploading">Uploading</div>}
      <input
        ref={fileInput}
        multiple
        type="file"
        onChange={e => {
          const files = Array.prototype.map.call(e.target.files, f => ({
            content: f
          }));
          setFiles(prevFiles => prevFiles.concat(files));
          // for (const file of e.target.files) {
          // console.log(file);
          // const reader = new FileReader();
          // reader.onload = e => {
          //   setFiles(files.concat({ previewURL: e.target.result }));
          // };
          // reader.readAsDataURL(file);
          // }
          // const file = e.target.files[0];
          // setUploading(true);
          // reader.readAsDataURL(file);
          // setTimeout(() => {
          //   setUploading(false);
          // }, 5000);
        }}
      />
    </Style>
  );
};

export default BasicUploader;
