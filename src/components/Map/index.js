import React, { useEffect, createRef } from "react";
import Leaflet from "leaflet";
import Style from "./style";
import "leaflet/dist/leaflet.css";

const Map = props => {
  const { tileLayerUrl } = props;
  let map;
  const mapRef = createRef();
  useEffect(() => {
    map = Leaflet.map(mapRef.current, {
      center: [24.3834142, 121.2317653],
      zoom: 15,
      zoomControl: true
    });
    Leaflet.tileLayer(tileLayerUrl, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }, []);

  return <Style ref={mapRef} />;
};

export default Map;
