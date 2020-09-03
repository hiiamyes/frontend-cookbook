import React, { useState, useEffect, createRef, forwardRef } from "react";
import Leaflet from "leaflet";
import Style from "./style";

const Map = forwardRef((props, ref) => {
  // const [map, setMap] = useState(null);
  const {
    map,
    tileLayerUrl,
    center = [24.3834142, 121.2317653],
    zoom = 15,
    children,
  } = props;
  // const mapRef = createRef();
  // useEffect(() => {
  // const map = Leaflet.map(mapRef.current, {
  //   center,
  //   zoom,
  //   zoomControl: true,
  // });
  // Leaflet.tileLayer(tileLayerUrl, {
  //   maxZoom: 19,
  //   attribution:
  //     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  // }).addTo(map);
  // setMap(map);
  // }, []);

  return (
    // <Style ref={mapRef}>
    <Style ref={ref}>
      {map &&
        React.Children.map(children, (child) =>
          React.cloneElement(child, { map }),
        )}
    </Style>
  );
});

export default Map;
