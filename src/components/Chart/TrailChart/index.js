import React, { createRef, useEffect } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import refresh from "./refresh";

const TrailChart = (props) => {
  const { trails, showPOI, showAxis, colors, margin } = props;
  const chartRef = createRef();
  const debouncedRefresh = debounce(300, refresh);

  useEffect(() => {
    debouncedRefresh({ chartRef, trails, showPOI, showAxis, colors, margin });
  }, [chartRef, trails]);

  useEffect(() => {
    const onResize = () => {
      debouncedRefresh({ chartRef, trails, showPOI, showAxis, colors, margin });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [chartRef, trails]);

  return <Style className="chart" ref={chartRef} />;
};

export default TrailChart;
