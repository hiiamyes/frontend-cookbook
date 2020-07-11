import React, { createRef, useEffect } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import refresh from "./refresh";

const TrailChart = (props) => {
  const { data, trail, showPOI } = props;
  const chartRef = createRef();
  const debouncedRefresh = debounce(300, refresh);

  useEffect(() => {
    debouncedRefresh({ chartRef, data, trail, showPOI });
  }, [chartRef, data, trail]);

  useEffect(() => {
    const onResize = () => {
      debouncedRefresh({ chartRef, data, trail, showPOI });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [chartRef, data, trail]);

  return <Style className="chart" ref={chartRef} />;
};

export default TrailChart;
