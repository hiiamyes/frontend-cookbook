import React, { useState } from "react";
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

const colors = [
  "#00796b",
  "#E65100",
  "#F57C00",
  "#FBC02D",
  "#388E3C",
  "#1976D2",
];

export const Basic = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart
          showPOI
          showAxis
          showArea
          trails={[taoShanKelaye]}
          colors={colors}
        />
      </div>
    </Layout>
  );
};

export const Axis = () => {
  const [showArea, setShowArew] = useState(true);
  return (
    <Layout>
      <input
        type="checkbox"
        value={showArea}
        onChange={() => setShowArea(!showArea)}
      ></input>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart
          showAxis
          showArea={showArea}
          trails={[taoShanKelaye]}
          colors={colors}
        />
      </div>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart showArea trails={[taoShanKelaye]} colors={colors} />
      </div>
    </Layout>
  );
};

export const CustomStrokeWidth = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart
          showPOI
          showAxis
          showArea
          trails={[taoShanKelaye]}
          colors={colors}
          strokeWidth={10}
        />
      </div>
    </Layout>
  );
};

export const NoAxis = () => {
  return (
    <Layout>
      <div style={{ width: "100vw", height: 480 }}>
        <TrailChart showPOI showArea trails={[taoShanKelaye]} colors={colors} />
      </div>
    </Layout>
  );
};

export const POI = () => {
  return (
    <div style={{ width: "100vw", height: 480 }}>
      <TrailChart
        showArea
        trails={[taoShanKelaye]}
        colors={colors}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      />
    </div>
  );
};

export const Multi = () => {
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
