// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Button from "src/components/Buttons/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Map from "./Map";
import Marker from "./Marker";
// import Trail from "./Trail";
// import { paths } from "./chilai-main-north-peaks.json";
import useMap from "./useMap";

// export default {
//   title: "Map",
// };

// const Layout = styled.div`
//   padding: 15px;
// `;

// export const FlyTo = () => {
//   const { map, mapRef } = useMap({ tileLayerUrl });
//   const yuShan = [23.4700025, 120.9572707];
//   const sheiShan = [24.3834142, 121.2317653];
//   return (
//     <Layout>
//       <div style={{ width: 640, height: 480 }}>
//         <Map map={map} ref={mapRef}>
//           <Marker lat={yuShan[0]} lng={yuShan[1]} />
//           <Marker lat={sheiShan[0]} lng={sheiShan[1]} />
//         </Map>
//       </div>

//       <Button onClick={() => map.flyTo(yuShan, 16)}>玉山主峰</Button>
//       <Button onClick={() => map.flyTo(sheiShan, 16)}>雪山主峰</Button>
//     </Layout>
//   );
// };

// export const MapTrail = () => {
//   const { map, mapRef } = useMap({
//     tileLayerUrl,
//     center: [24.1125952, 121.3252793],
//     zoom: 13,
//   });
//   return (
//     <Layout>
//       <div style={{ width: 640, height: 480 }}>
//         <Map map={map} ref={mapRef}>
//           <Trail paths={paths} />
//         </Map>
//       </div>
//     </Layout>
//   );
// };

// export const MapTrailAndMarker = () => {
//   const { map, mapRef } = useMap({
//     tileLayerUrl,
//     center: [24.1125952, 121.3252793],
//     zoom: 13,
//   });
//   return (
//     <Layout>
//       <div style={{ width: 640, height: 480 }}>
//         <Map map={map} ref={mapRef}>
//           <>
//             {[
//               [23.4700025, 120.9572707],
//               [24.3834142, 121.2317653],
//             ].map((node) => {
//               const [lat, lng] = node;
//               return <Marker lat={lat} lng={lng} />;
//             })}
//             <Marker lat={24.118343} lng={121.3345488} />
//             <Trail paths={paths} />
//           </>
//         </Map>
//       </div>
//     </Layout>
//   );
// };

// export const MapTrailAndMarkerAsync = () => {
//   const [nodes, setNodes] = useState([]);
//   const { map, mapRef } = useMap({
//     tileLayerUrl,
//     center: [24.1125952, 121.3252793],
//     zoom: 13,
//   });
//   useEffect(() => {
//     setTimeout(() => {
//       setNodes([
//         [23.4700025, 120.9572707],
//         [24.118343, 121.3345488],
//       ]);
//     }, 2000);
//   }, []);
//   return (
//     <Layout>
//       <div style={{ width: 640, height: 480 }}>
//         <Map map={map} ref={mapRef}>
//           <>
//             {nodes.map((node) => {
//               const [lat, lng] = node;
//               return <Marker lat={lat} lng={lng} />;
//             })}
//             <Trail paths={paths} />
//           </>
//         </Map>
//       </div>
//     </Layout>
//   );
// };

const meta = {
  title: "Example/Map",
  component: Map,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },

  args: { onClick: fn() },
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    const lat = 24.3834142;
    const lng = 121.2317653;
    const { map, mapRef } = useMap({
      center: [lat, lng],
    });
    return (
      <div className="w-10" style={{ width: 640, height: 480 }}>
        <Map map={map} ref={mapRef}>
          <Marker lat={lat} lng={lng} />
        </Map>
      </div>
    );
  },
};
