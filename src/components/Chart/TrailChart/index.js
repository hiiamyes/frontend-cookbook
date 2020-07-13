import React, { createRef, useEffect } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import refresh from "./refresh";

const TrailChart = (props) => {
  const {
    trails,
    showPOI,
    showAxis,
    showArea,
    colors,
    margin,
    strokeWidth,
  } = props;
  const chartRef = createRef();
  const debouncedRefresh = debounce(300, refresh);

  useEffect(() => {
    debouncedRefresh({
      chartRef,
      trails,
      showPOI,
      showAxis,
      showArea,
      colors,
      margin,
      strokeWidth,
    });
  }, [chartRef, trails]);

  useEffect(() => {
    const onResize = () => {
      debouncedRefresh({
        chartRef,
        trails,
        showPOI,
        showAxis,
        showArea,
        colors,
        margin,
        strokeWidth,
      });
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [chartRef, trails]);

  return <Style className="chart" ref={chartRef} />;
};

export default TrailChart;
