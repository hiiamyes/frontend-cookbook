import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";


import BasicSelectDemo from "src/components/Select/BasicSelect/demo";
import TimezoneNameSelect from "src/components/Select/TimezoneNameSelect";
import LanguagePickerDemo from "src/components/Select/LanguagePicker/demo";

import LineChartDemo from "src/components/Chart/LineChart/demo";
import BarChartDemo from "src/components/Chart/BarChart/demo";

import FilePickerDemo from "src/components/FilePicker/demo";
import BasicUploaderDemo from "src/components/Uploader/demo";

import CarouselDemo from "src/components/Carousel/demo";
import TableDemo from "src/components/Table/demo";
import ModalDemo from "src/components/Modal/demo";
import DrawerDemo from "src/components/Drawer/demo";
import TagDemo from "src/components/Tag/demo";
import CollapseDemo from "src/components/Collapse/demo";
import ScrollbarDemo from "src/components/Scrollbar/demo";
import FormDemo from "src/components/Form/demo";

const Layout = styled.div`
  padding: 15px;
`;

storiesOf("Form", module).add("Form", () => (
  <Layout>
    <FormDemo />
  </Layout>
));

storiesOf("Scrollbar", module).add("Scrollbar", () => (
  <Layout>
    <ScrollbarDemo />
  </Layout>
));

storiesOf("Collapse", module).add("Collapse", () => (
  <Layout>
    <CollapseDemo />
  </Layout>
));

storiesOf("Tag", module).add("Tag", () => (
  <Layout>
    <TagDemo />
  </Layout>
));

storiesOf("Drawer", module).add("Drawer", () => (
  <Layout>
    <DrawerDemo />
  </Layout>
));

storiesOf("Select", module)
  .add("BasicSelect", () => {
    return (
      <Layout>
        <BasicSelectDemo />
      </Layout>
    );
  })
  .add("TimezoneNameSelect", () => (
    <Layout>
      <TimezoneNameSelect />
    </Layout>
  ))
  .add("LanguagePicker", () => (
    <Layout>
      <LanguagePickerDemo />
    </Layout>
  ));

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

storiesOf("FilePicker", module).add("FilePicker", () => (
  <Layout>
    <FilePickerDemo />
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

storiesOf("Table", module).add("BasicTable", () => (
  <Layout>
    <TableDemo />
  </Layout>
));

storiesOf("Modal", module).add("Modal", () => (
  <Layout>
    <ModalDemo />
  </Layout>
));
