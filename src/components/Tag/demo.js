import React from "react";
import { action } from "@storybook/addon-actions";
import Tag from "src/components/Tag";

const TagDemo = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          grid: "1fr / repeat(5, min-content)",
          gridGap: "5px",
          justifyItems: "left"
        }}
      >
        <Tag onDelete={action("delete")}>Hiking</Tag>
        <Tag onDelete={action("delete")}>Snowboarding</Tag>
        <Tag onDelete={action("delete")}>Summer</Tag>
        <Tag onDelete={action("delete")}>Winter</Tag>
        <Tag onDelete={action("delete")}>Cloth</Tag>
      </div>
      <br />
      <div style={{ display: "grid", gridGap: "5px", justifyItems: "left" }}>
        <Tag onDelete={action("delete")}>Hiking</Tag>
        <Tag onDelete={action("delete")}>Snowboarding</Tag>
        <Tag onDelete={action("delete")}>Summer</Tag>
        <Tag onDelete={action("delete")}>Winter</Tag>
        <Tag onDelete={action("delete")}>Cloth</Tag>
      </div>
    </div>
  );
};

export default TagDemo;
