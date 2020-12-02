import React from "react";
import Style from "./style";

const Table = (props) => {
  const { rows, columns } = props;
  return (
    <Style className="table">
      <div className="thead">
        <div
          className="tr"
          style={{
            grid: `1fr / ${columns.map(({ grid }) => grid).join(" ")}`,
          }}
        >
          {columns.map((column, columnIndex) => {
            return (
              <div key={columnIndex} className="th">
                {column.header}
              </div>
            );
          })}
        </div>
      </div>
      <div className="tbody">
        {rows.map((row, rowIndex) => {
          return (
            <div
              className="tr"
              style={{
                grid: `1fr / ${columns.map(({ grid }) => grid).join(" ")}`,
              }}
            >
              {columns.map((column, columnIndex) => {
                return (
                  <div className="td" key={columnIndex}>
                    {column.render({ rows, row, rowIndex, columnIndex })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </Style>
  );
};

export default Table;
