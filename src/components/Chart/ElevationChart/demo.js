import React from "react";
import ElevationChart from "./index";
import bilu from "./bilu.json";
import hehuanWest from "./hehuan-west.json";
import taoShanKelaye from "./tao-shan-kelaye.json";

const ElevationChartDemo = () => {
  return (
    <div>
      <h1>Tao</h1>
      <div style={{ width: "100vw", height: 480 }}>
        <ElevationChart showPOI trail={taoShanKelaye} />
      </div>
      {/* <h1>Mountain Bilu</h1>
      <div style={{ width: "100vw", height: 480 }}>
        <ElevationChart data={bilu} />
      </div>
      <h1>Hehuan West Peak</h1>
      <div style={{ width: 640, height: 480 }}>
        <ElevationChart data={hehuanWest} />
      </div> */}
    </div>
  );
};

export default ElevationChartDemo;
