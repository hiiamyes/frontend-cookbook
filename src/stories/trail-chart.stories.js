import React from "react";
import styled from "styled-components";
import ElevationChartDemo from "src/components/Chart/ElevationChart/demo";

export default {
  title: "Trail Chart",
};

const Layout = styled.div`
  padding: 15px;
`;

export const TrailChart = () => {
  return (
    <Layout>
      <ElevationChartDemo />
    </Layout>
  );
};
