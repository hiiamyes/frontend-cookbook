import React from "react";
import BarChart from "./index";

const BarChartDemo = () => {
  const data = [
    { x: "2019-01-01", y: 123 },
    { x: "2019-01-02", y: 100 },
    { x: "2019-01-03", y: 1 },
    { x: "2019-01-04", y: 12 },
    { x: "2019-01-05", y: 23 }
  ];
  return <BarChart data={data} />;
};

export default BarChartDemo;
