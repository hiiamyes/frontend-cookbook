import React, { useState } from "react";
import FAIcon from "src/components/FAIcon";
import Style from "./style";

const Tag = props => {
  const { onDelete, children } = props;
  const [hover, setHover] = useState(false);
  return (
    <Style
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div>{children}</div>
      <button className={`delete ${hover && "hover"}`} onClick={onDelete}>
        <FAIcon icon="times" size="small"></FAIcon>
      </button>
    </Style>
  );
};

export default Tag;
