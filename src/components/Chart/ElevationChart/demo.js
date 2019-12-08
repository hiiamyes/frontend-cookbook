import React from "react";
import ElevationChart from "./index";
import bilu from "./bilu.json";
import hehuanWest from "./hehuan-west.json";

const ElevationChartDemo = () => {
  return (
    <div>
      <h1>Mountain Bilu</h1>
      <ElevationChart data={bilu} />
      <h1>Hehuan West Peak</h1>
      <ElevationChart data={hehuanWest} />
    </div>
  );
};

export default ElevationChartDemo;
