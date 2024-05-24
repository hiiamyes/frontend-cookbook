import { useState, createRef, useEffect } from "react";
import Leaflet from "leaflet";

const useMap = ({
  tileLayerUrl,
  center = [24.3834142, 121.2317653],
  zoom = 15,
}) => {
  const [map, setMap] = useState(false);
  const mapRef = createRef();

  useEffect(() => {
    const map = Leaflet.map(mapRef.current, {
      center,
      zoom,
      zoomControl: true,
    });
    Leaflet.tileLayer(tileLayerUrl, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    setMap(map);
  }, []);

  return { map, mapRef };
};

export default useMap;
