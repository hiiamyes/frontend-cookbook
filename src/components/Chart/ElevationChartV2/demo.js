import React from "react";
import ElevationChartV2 from "./index";
import data from "./chilai-main-north-peaks.json";

const ElevationChartV2Demo = () => {
  const { paths, nodes } = data;
  return (
    <div>
      <h1>Hehuan West Peak</h1>
      <ElevationChartV2 data={paths} nodes={nodes} />
    </div>
  );
};

export default ElevationChartV2Demo;
