import React, { useState } from "react";
import styled from "styled-components";
import TimePicker from "src/components/TimePicker";

const Layout = styled.div`
  padding: 15px;
`;

export default {
  title: "Time Picker",
};

export const Basic = () => {
  const [time, setTime] = useState("12:34");
  return (
    <Layout>
      <TimePicker value={time} onChange={(time) => setTime(time)} />
    </Layout>
  );
};
