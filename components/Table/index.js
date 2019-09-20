import React, { useState, createRef } from "react";
import Style from "./style";

const Table = props => {
  const { data: rows, columns } = props;
  return (
    <Style className="table">
      {rows.map((row, rowIndex) => {
        return (
          <div className="tr">
            {columns.map((column, columnIndex) => {
              return <div className="td">{row[column]}</div>;
            })}
          </div>
        );
      })}
    </Style>
  );
};

export default Table;
