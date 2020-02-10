import React from "react";
import ElevationChartV2 from "./index";
import data from "./chilai-main-north-peaks.json";
import taoShanKelaye from "./tao-shan-kelaye.json";

const ElevationChartV2Demo = () => {
  const { paths, nodes } = data;
  return (
    <div>
      <h1>Chilai Main North Peaks</h1>
      <ElevationChartV2 data={paths} nodes={nodes} />

      <h1>Tao Shan Kelaye</h1>
      <ElevationChartV2
        data={taoShanKelaye.paths}
        nodes={taoShanKelaye.nodes}
      />
    </div>
  );
};

export default ElevationChartV2Demo;
