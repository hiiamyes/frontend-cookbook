import React from "react";
import ElevationChart from "./index";

const ElevationChartDemo = () => {
  const data = [
    { x: 10, y: 123 },
    { x: 20, y: 300 },
    { x: 30, y: 823 },
    { x: 40, y: 623 },
    { x: 50, y: 1123 }
  ];
  return <ElevationChart data={data} />;
};

export default ElevationChartDemo;
