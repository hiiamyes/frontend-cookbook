import React from "react";
import classnames from "classnames";
import Style from "./style";

const Table = (props) => {
  const { rows, columns, mobile } = props;
  return (
    <Style className="table">
      {mobile && (
        <div className="mobile">
          {rows.map((row, rowIndex) => {
            return mobile.render({ rows, row, rowIndex });
          })}
        </div>
      )}
      <div className={classnames("thead", { mobile })}>
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
      <div className={classnames("tbody", { mobile })}>
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
