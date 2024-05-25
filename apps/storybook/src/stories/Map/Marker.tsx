import { useEffect } from "react";
import Leaflet from "leaflet";

type Props = {
  map?: Leaflet.Map;
  lat: number;
  lng: number;
};

const Marker = (props: Props) => {
  const { map, lat, lng } = props;
  useEffect(() => {
    if (!map) return;
    const marker = Leaflet.marker([lat, lng], {
      icon: Leaflet.divIcon({
        iconSize: new Leaflet.Point(16, 16),
        className: "marker",
      }),
    });
    marker.addTo(map);
  }, [map, lat, lng]);

  return null;
};

export default Marker;
