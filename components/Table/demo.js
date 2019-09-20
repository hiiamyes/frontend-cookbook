import React, { useState } from "react";
import Table from "./index";

const data = [...new Array(100)].map((x, i) => ({
  name: `name${i}`,
  brand: `brand${i}`,
  product: `product${i}`
}));

const columns = ["name", "brand", "product"];

const TableDemo = () => {
  return <Table data={data} columns={columns} />;
};

export default TableDemo;
