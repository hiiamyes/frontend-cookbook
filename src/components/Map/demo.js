import React from "react";
import Map from "./index";
import Marker from "./Marker";
import Trail from "./Trail";
import { paths } from "./chilai-main-north-peaks.json";

const tileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=${process.env.MAPBOX_ACCESS_TOKEN}`;

const MapDemo = () => {
  return (
    <div>
      <div style={{ width: 640, height: 480 }}>
        <Map key="test" tileLayerUrl={tileLayerUrl}>
          <Marker lat={23.5948879} lng={119.8960552} />
          <Marker lat={24.3834142} lng={121.2317653} />
        </Map>
      </div>
      <div style={{ width: 640, height: 480 }}>
        <Map
          key="test"
          tileLayerUrl={tileLayerUrl}
          center={[24.1125952, 121.3252793]}
          zoom={13}
        >
          <Trail paths={paths} />
        </Map>
      </div>
    </div>
  );
};

export default MapDemo;
