import { useState, createRef, useEffect } from "react";
import Leaflet from "leaflet";

const mapboxTileLayerUrl = `https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=${import.meta.env.STORYBOOK_MAPBOX_ACCESS_TOKEN}`;

type Props = {
  tileLayerUrl?: string;
  center?: [number, number];
  zoom?: number;
};

const useMap = (
  props: Props,
): { map: Leaflet.Map; mapRef: React.RefObject<HTMLDivElement> } => {
  const {
    tileLayerUrl = mapboxTileLayerUrl,
    center = [24.3834142, 121.2317653],
    zoom = 15,
  } = props;
  const [map, setMap] = useState(null as unknown as Leaflet.Map);
  const mapRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (map) return;
    const _map = Leaflet.map(mapRef.current as HTMLDivElement, {
      center,
      zoom,
      zoomControl: true,
    });
    Leaflet.tileLayer(tileLayerUrl, {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(_map);
    setMap(_map);
  }, [map, mapRef, tileLayerUrl, center, zoom]);

  return { map, mapRef };
};

export default useMap;
