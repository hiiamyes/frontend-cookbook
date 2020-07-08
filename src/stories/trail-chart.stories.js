import React from "react";
import styled from "styled-components";
import ElevationChart from "src/components/Chart/ElevationChart";
import taoShanKelaye from "src/components/Chart/ElevationChart/tao-shan-kelaye.json";

export default {
  title: "Trail Chart",
};

const Layout = styled.div`
  padding: 15px;
`;

export const TrailChart = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <ElevationChart showPOI showAxis trail={taoShanKelaye} />
      </div>
    </Layout>
  );
};

export const TrailWithoutAxis = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <ElevationChart showPOI trail={taoShanKelaye} />
      </div>
    </Layout>
  );
};

export const TrailChartWithoutPOI = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <ElevationChart trail={taoShanKelaye} />
      </div>
    </Layout>
  );
};
