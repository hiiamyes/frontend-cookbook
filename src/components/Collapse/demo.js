import React, { useState } from "react";
import Table from "src/components/Table";
import Button from "src/components/Button";
import useCollapse from "src/components/Collapse/useCollapse";
import Collapse from "./index";

const columns = () => {
  return ["name", "brand", "product"];
};

const CollapseDemo = () => {
  const [rows, setRows] = useState(
    [...new Array(10)].map((x, i) => ({
      name: `name${i}`,
      brand: `brand${i}`,
      product: `product${i}`,
    })),
  );
  const { visible, toggleCollapse } = useCollapse();
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Button onClick={toggleCollapse}>toggle</Button>
        <div style={{ width: "5px" }}></div>
        <Button
          onClick={() =>
            setRows(
              rows.concat(
                [...new Array(3)].map((x, i) => ({
                  name: `name${i + rows.length}`,
                  brand: `brand${i + rows.length}`,
                  product: `product${i + rows.length}`,
                })),
              ),
            )
          }
        >
          Add 3 row
        </Button>
        <div style={{ width: "5px" }}></div>
        <Button onClick={() => setRows(rows.slice(0, rows.length - 3))}>
          Delete 3 row
        </Button>
      </div>
      <Collapse visible={visible}>
        <Table rows={rows} columns={columns()} />
      </Collapse>
    </div>
  );
};

export default CollapseDemo;
