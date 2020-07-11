import React from "react";
import styled from "styled-components";
import TrailChart from "src/components/Chart/TrailChart";
import taoShanKelaye from "src/components/Chart/TrailChart/trails/tao-shan-kelaye.json";
import chilaiMainNorthPeaks from "src/components/Chart/TrailChart/trails/chilai-main-north-peaks.json";
import bilu from "src/components/Chart/TrailChart/trails/bilu.json";
import ssnp from "src/components/Chart/TrailChart/trails/shei-shan-north-peak.json";
import ssmnp from "src/components/Chart/TrailChart/trails/shei-shan-main-north-peak.json";

export default {
  title: "Trail Chart",
};

const Layout = styled.div`
  padding: 15px;
`;

const colors = ["#E65100", "#F57C00", "#FBC02D", "#388E3C", "#1976D2"];

export const TrailChartBasic = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart showPOI showAxis trails={[taoShanKelaye]} colors={colors} />
      </div>
    </Layout>
  );
};

export const TrailWithoutAxis = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart showPOI trails={[taoShanKelaye]} colors={colors} />
      </div>
    </Layout>
  );
};

export const TrailChartWithoutPOI = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart trails={[taoShanKelaye]} colors={colors} />
      </div>
    </Layout>
  );
};

export const MultiTrailsChart = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart
          trails={[taoShanKelaye, chilaiMainNorthPeaks, bilu, ssnp, ssmnp]}
          colors={colors}
        />
      </div>
    </Layout>
  );
};
