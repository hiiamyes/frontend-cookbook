import React, { memo } from "react";

const Space = (props) => {
  const { width = 0, height = 0, unit = "rem", inlineBlock, ...rest } = props;
  return (
    <div
      style={{
        width: `${width}${unit}`,
        height: `${height}${unit}`,
        display: inlineBlock ? "inline-block" : "block",
      }}
      {...rest}
    />
  );
};

export default memo(Space);
