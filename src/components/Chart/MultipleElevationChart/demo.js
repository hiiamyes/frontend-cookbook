import React from "react";
import MultipleElevationChart from "./index";
import bilu from "./bilu.json";
import hehuanWest from "./hehuan-west.json";
import mountainZhiJiaYang from "./mountain-zhi-jia-yang";
import chilaiMainNorthPeaks from "./chilai-main-north-peaks";

const ElevationChartDemo = () => {
  return (
    <div>
      <h3 style={{ color: "#f44336" }}>Hehuan West Peak</h3>
      <h3 style={{ color: "#00796b" }}>Mountain Bilu</h3>
      <h3 style={{ color: "#01579B" }}>Mountain Zhi Jia Yang</h3>
      <h3 style={{ color: "#76FF03" }}>奇萊主北</h3>
      <MultipleElevationChart
        datas={[
          bilu,
          hehuanWest,
          mountainZhiJiaYang,
          chilaiMainNorthPeaks.paths
        ]}
      />
    </div>
  );
};

export default ElevationChartDemo;
