import React, { createRef, useEffect } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import refresh from "./refresh";

const TrailChart = (props) => {
  const { data } = props;
  const chartRef = createRef();
  const debouncedRefresh = debounce(300, refresh);

  useEffect(() => {
    debouncedRefresh(chartRef, data);
  }, [chartRef, data]);

  useEffect(() => {
    const onResize = () => {
      debouncedRefresh(chartRef, data);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [chartRef, data]);

  return <Style className="chart" ref={chartRef} />;
};

export default TrailChart;
