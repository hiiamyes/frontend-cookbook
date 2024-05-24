import React, { useEffect } from "react";
import Leaflet from "leaflet";

const Marker = props => {
  const { map, lat, lng } = props;
  useEffect(() => {
    const marker = Leaflet.marker([lat, lng], {
      icon: Leaflet.divIcon({
        iconSize: new Leaflet.Point(16, 16),
        className: "marker"
      })
    });
    marker.addTo(map);
  }, []);

  return null;
};

export default Marker;
 