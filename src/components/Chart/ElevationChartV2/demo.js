import React from "react";
import ElevationChartV2 from "./index";
import hehuanWest from "./hehuan-west.json";

const ElevationChartV2Demo = () => {
  return (
    <div>
      <h1>Hehuan West Peak</h1>
      <ElevationChartV2
        data={hehuanWest}
        nodes={[
          { distance: 2239, ele: 3413.555234243258, name: "合歡北峰" },
          { distance: 6678, ele: 3137.1733986368426, name: "合歡西峰" },
          { distance: 11117, ele: 3413.555234243258, name: "合歡北峰" }
        ]}
      />
    </div>
  );
};

export default ElevationChartV2Demo;
