import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import "antd/dist/antd.css";

import { BasicInputDemo } from "../components/Input/BasicInput";
import FAIcon from "../components/FAIcon";
import BasicSelect from "../components/Select/BasicSelect";
import TimezoneNameSelect from "../components/Select/TimezoneNameSelect";
import { MoneyInputDemo } from "../components/Input/MoneyInput";
import LineChartDemo from "../components/Chart/LineChart/demo";
import BarChartDemo from "../components/Chart/BarChart/demo";
import BasicUploaderDemo from "../components/Uploader/demo";
import SearchDemo from "../components/Input/Search/demo";
import CarouselDemo from "../components/Carousel/demo";

import "../styles/global-style.css";

const Layout = styled.div`
  padding: 15px;
`;

storiesOf("Input", module)
  .add("BasicInput", () => (
    <Layout>
      <BasicInputDemo />
    </Layout>
  ))
  .add("MoneyInput", () => (
    <Layout>
      <MoneyInputDemo />
    </Layout>
  ))
  .add("SearchInput", () => (
    <Layout>
      <SearchDemo />
    </Layout>
  ));

storiesOf("Icon", module).add("FontAwesomeIcon", () => <FAIcon icon="cog" />);

storiesOf("Select", module)
  .add("BasicSelect", () => {
    return (
      <Layout>
        <BasicSelect />
      </Layout>
    );
  })
  .add("TimezoneNameSelect", () => (
    <Layout>
      <TimezoneNameSelect />
    </Layout>
  ));

storiesOf("Icon", module).add("FontAwesomeIcon", () => <FAIcon icon="cog" />);
storiesOf("Chart", module)
  .add("LineChart", () => (
    <Layout>
      <LineChartDemo />
    </Layout>
  ))
  .add("BarChart", () => (
    <Layout>
      <BarChartDemo />
    </Layout>
  ));

storiesOf("Uploader", module).add("BasicUploader", () => (
  <Layout>
    <BasicUploaderDemo />
  </Layout>
));

storiesOf("Carousel", module).add("Carousel", () => (
  <Layout>
    <CarouselDemo />
  </Layout>
));
