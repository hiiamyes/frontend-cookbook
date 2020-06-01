import React, { useState } from "react";
import columns from "./columns";
import Table from "./index";

const rows = [...new Array(100)].map((x, i) => ({
  name: `name${i}`,
  brand: `brand${i}`,
  product: `product${i}`,
}));

const TableDemo = () => {
  return <Table rows={rows} columns={columns} />;
};

export default TableDemo;
