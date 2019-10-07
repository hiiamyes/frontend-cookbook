import React from "react";
import Map from "./index";

const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

const MapDemo = () => {
  return (
    <div style={{ width: 640, height: 480 }}>
      <Map key="test" tileLayerUrl={tileLayerUrl} />
    </div>
  );
};

export default MapDemo;
