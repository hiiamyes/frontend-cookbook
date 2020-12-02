import React from "react";

const columns = () => {
  return [
    {
      header: "",
      grid: "1fr",
      key: "name",
      render: ({ row }) => {
        return <div>{row.id}</div>;
      },
    },
  ];
};

export default columns;
