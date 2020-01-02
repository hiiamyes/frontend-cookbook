import React, { useEffect } from "react";
import Leaflet from "leaflet";

const Trail = props => {
  const { map, paths } = props;
  useEffect(() => {
    const qq = paths.map(({ lat, lng }) => [lng, lat]);
    const leafletPath = Leaflet.geoJSON(
      [
        {
          type: "LineString",
          coordinates: qq
        }
      ],
      {
        style: () => ({
          className: "trail"
        })
      }
    );
    leafletPath.addTo(map);
  }, []);

  return null;
};

export default Trail;
