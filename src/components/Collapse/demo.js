import React from "react";
import Table from "src/components/Table";
import Button from "src/components/Button";
import useCollapse from "src/components/Collapse/useCollapse";
import Collapse from "./index";

const rows = [...new Array(10)].map((x, i) => ({
  name: `name${i}`,
  brand: `brand${i}`,
  product: `product${i}`,
}));

const columns = () => {
  return ["name", "brand", "product"];
};

const CollapseDemo = () => {
  const { visible, toggleCollapse } = useCollapse();
  return (
    <div>
      <Button onClick={toggleCollapse}>toggle</Button>
      <Collapse visible={visible}>
        <Table rows={rows} columns={columns()} />
      </Collapse>
    </div>
  );
};

export default CollapseDemo;
