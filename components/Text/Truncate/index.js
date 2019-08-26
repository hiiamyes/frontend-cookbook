import React, { useState } from "react";
import { Input } from "antd";
import Style from "./style";

const { TextArea } = Input;

const Truncate = props => {
  let { value, onChange } = props;
  return (
    <div>
      <textarea value={value} onChange={e => onChange(e.target.value)} />
    </div>
  );
};

const TruncateDemo = () => {
  const [value, setValue] = useState(null);

  return (
    <div>
      <div>basic</div>
      <Truncate
        value={value}
        onChange={value => {
          setValue(value);
        }}
      />
      <div
        style={{
          width: "200px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden"
        }}
      >
        {`Shave is a zero dependency javascript plugin that truncates multi-line text to fit within an html element based on a set max-height. It then stores the diff of the original text string in a hidden <span> element following the visible text. This means the original text remains intact!`}
      </div>
      <div
        style={{
          width: "200px"
        }}
      >
        {`Shave is a zero dependency javascript plugin that truncates multi-line text to fit within an html element based on a set max-height. It then stores the diff of the original text string in a hidden <span> element following the visible text. This means the original text remains intact!`}
      </div>
      <div>antd</div>
      <TextArea />
    </div>
  );
};

export default Truncate;
export { TruncateDemo };
