import React, { useState } from "react";
import styled from "styled-components";
import Table from "src/components/Table";

export default {
  title: "Table",
};

const Layout = styled.div`
  padding: 15px;
`;

export const Basic = () => {
  const rows = [...new Array(100)].map((x, i) => ({
    name: `name${i}`,
    brand: `brand${i}`,
    product: `product${i}`,
  }));
  const columns = () => {
    return [
      {
        header: "Name",
        key: "name",
        grid: "100px",
        render: ({ row }) => <div>{row.name}</div>,
      },
      {
        header: "Brand",
        key: "brand",
        grid: "1fr",
        render: ({ row }) => <div>{row.brand}</div>,
      },
      {
        header: "Product",
        key: "product",
        grid: "200px",
        render: ({ row }) => <div>{row.product}</div>,
      },
    ];
  };

  return (
    <Layout>
      <Table rows={rows} columns={columns()} />;
    </Layout>
  );
};

export const MobileTable = () => {
  const rows = [...new Array(100)].map((x, i) => ({
    name: `name${i}`,
    brand: `brand${i}`,
    product: `product${i}`,
  }));
  const columns = () => {
    return [
      {
        header: "Name",
        key: "name",
        grid: "100px",
        render: ({ row }) => <div>{row.name}</div>,
      },
      {
        header: "Brand",
        key: "brand",
        grid: "1fr",
        render: ({ row }) => <div>{row.brand}</div>,
      },
      {
        header: "Product",
        key: "product",
        grid: "200px",
        render: ({ row }) => <div>{row.product}</div>,
      },
    ];
  };

  return (
    <Layout>
      <Table
        rows={rows}
        columns={columns()}
        mobile={{
          render: ({ row }) => {
            return (
              <div>
                <div>{row.name}</div>
                <div>{row.brand}</div>
                <div>{row.product}</div>
              </div>
            );
          },
        }}
      />
      ;
    </Layout>
  );
};
