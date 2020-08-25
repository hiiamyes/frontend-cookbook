import React from "react";
import styled from "styled-components";
import Loader from "src/components/Loader";
import CssLoader from "src/components/Loader/CssLoader";

export default {
  title: "Loader",
};

const Layout = styled.div`
  padding: 15px;
`;

export const Basic = () => {
  return (
    <Layout>
      <Loader />
      <Loader icon="mountain" />
    </Layout>
  );
};

export const Css = () => {
  return (
    <Layout>
      <CssLoader />
    </Layout>
  );
};
