import React from "react";
import Map from "./index";
import Marker from "./Marker";

const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

const MapDemo = () => {
  return (
    <div style={{ width: 640, height: 480 }}>
      <Map key="test" tileLayerUrl={tileLayerUrl}>
        <Marker lat={23.5948879} lng={119.8960552} />
        <Marker lat={24.3834142} lng={121.2317653} />
      </Map>
    </div>
  );
};

export default MapDemo;
