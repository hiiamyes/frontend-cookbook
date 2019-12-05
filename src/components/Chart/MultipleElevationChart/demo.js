import React from "react";
import MultipleElevationChart from "./index";
import bilu from "./bilu.json";
import hehuanWest from "./hehuan-west.json";
import mountainZhiJiaYang from "./mountain-zhi-jia-yang";

const ElevationChartDemo = () => {
  return (
    <div>
      <h3 style={{ color: "#f44336" }}>Hehuan West Peak</h3>
      <h3 style={{ color: "#00796b" }}>Mountain Bilu</h3>
      <h3 style={{ color: "#01579B" }}>Mountain Zhi Jia Yang</h3>
      <MultipleElevationChart datas={[bilu, hehuanWest, mountainZhiJiaYang]} />
    </div>
  );
};

export default ElevationChartDemo;
