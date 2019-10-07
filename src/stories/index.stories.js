import React from "react";

import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import "antd/dist/antd.css";

import { BasicInputDemo } from "src/components/Input/BasicInput";
import FAIcon from "src/components/FAIcon";

import BasicSelectDemo from "src/components/Select/BasicSelect/demo";
import TimezoneNameSelect from "src/components/Select/TimezoneNameSelect";
import LanguagePickerDemo from "src/components/Select/LanguagePicker/demo";

import { MoneyInputDemo } from "src/components/Input/MoneyInput";
import LineChartDemo from "src/components/Chart/LineChart/demo";
import BarChartDemo from "src/components/Chart/BarChart/demo";
import BasicUploaderDemo from "src/components/Uploader/demo";
import SearchInputDemo from "src/components/Input/SearchInput/demo";
import FormInputDemo from "src/components/Input/FormInput/demo";

import CarouselDemo from "src/components/Carousel/demo";
import LoaderDemo from "src/components/Loader/demo";
import TableDemo from "src/components/Table/demo";
import ModalDemo from "src/components/Modal/demo";
import ButtonDemo from "src/components/Button/demo";
import DrawerDemo from "src/components/Drawer/demo";

import "src/styles/global-style.css";

const Layout = styled.div`
  padding: 15px;
`;

storiesOf("Drawer", module).add("Drawer", () => (
  <Layout>
    <DrawerDemo />
  </Layout>
));

storiesOf("Button", module).add("Button", () => (
  <Layout>
    <ButtonDemo />
  </Layout>
));

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
      <SearchInputDemo />
    </Layout>
  ))
  .add("FormInput", () => (
    <Layout>
      <FormInputDemo />
    </Layout>
  ));

storiesOf("Icon", module).add("FontAwesomeIcon", () => <FAIcon icon="cog" />);

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

storiesOf("Loader", module).add("Loader", () => (
  <Layout>
    <LoaderDemo />
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
