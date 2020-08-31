import React, { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Pagination from "src/components/Pagination";
import getPage from "src/components/Pagination/getPage";

export default {
  title: "Pagination",
};

const Layout = styled.div`
  padding: 15px;
`;

export const Basic = () => {
  const page = getPage();
  return (
    <BrowserRouter>
      <Layout>
        <Pagination
          // disabled={loading || !!filter.searchText}
          // nextDisabled={transfers.length < FIXED_PAGE_SIZE}
          page={page}
        />
      </Layout>
    </BrowserRouter>
  );
};
