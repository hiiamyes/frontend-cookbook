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
  const mapChildren = [];

  map &&
    React.Children.forEach(children, (child) => {
      if (child.type === React.Fragment) {
        React.Children.forEach(child.props.children, (child) => {
          mapChildren.push(React.cloneElement(child, { map }));
        });
      } else {
        mapChildren.push(React.cloneElement(child, { map }));
      }
    });
  return (
    // <Style ref={mapRef}>
    <Style ref={ref}>{map && mapChildren}</Style>
  );
});

export default Map;
