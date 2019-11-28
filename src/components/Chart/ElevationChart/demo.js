import React from "react";
import ElevationChart from "./index";
import data from "./data.json";

const ElevationChartDemo = () => {
  return (
    <div>
      {/* <h1>Jiaming Lake</h1> */}
      <h1>Hehuan West Peak</h1>
      <ElevationChart data={data} />
    </div>
  );
};

export default ElevationChartDemo;
