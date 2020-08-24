import React, { useState } from "react";
import styled from "styled-components";
import NumberSelect from "src/components/Select/NumberSelect";

const Layout = styled.div`
  padding: 15px;
`;

export default {
  title: "Number Select",
};

export const Basic = () => {
  const [time, setTime] = useState("34");
  return (
    <Layout>
      <NumberSelect
        min={0}
        max={300}
        value={time}
        onChange={(time) => setTime(time)}
      />
    </Layout>
  );
};
