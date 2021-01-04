import * as d3 from "d3";
import drawAxis from "./drawAxis";
import drawLine from "./drawLine";
import drawArea from "./drawArea";
import drawPOIs from "./drawPOIs";
import createGradient from "./createGradient";

const defaultMargin = { top: 50, right: 50, bottom: 100, left: 50 };

const refresh = ({
  chartRef,
  trails,
  showPOI,
  showAxis,
  showArea,
  colors,
  margin = defaultMargin,
  strokeWidth = 2,
}) => {
  const container = {
    width: chartRef.current.parentNode.offsetWidth,
    height: chartRef.current.parentNode.offsetHeight,
  };
  const chart = {
    width: container.width - margin.left - margin.right,
    height: container.height - margin.top - margin.bottom,
  };
  const { width, height } = chart;
  const xMin = 0;
  const xMax = Math.max(
    ...trails.map((trail) => trail.paths[trail.paths.length - 1].x),
  );
  const yMin = Math.min(
    ...trails
      .map(({ paths }) => paths)
      .reduce((a, b) => a.concat(b), [])
      .map(({ y }) => y),
  );
  const yMax = Math.max(
    ...trails
      .map(({ paths }) => paths)
      .reduce((a, b) => a.concat(b), [])
      .map(({ y }) => y),
  );

  const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, width]);
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([height, 0]);
  d3.select(chartRef.current).select("svg").remove();
  const svg = d3
    .select(chartRef.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const mousemove = (e) => {
    // Get x from mouse event
    // https://github.com/d3/d3-selection/blob/master/README.md#pointer
    const [x, _y] = d3.pointer(e);
    // console.log("x: ", x);
    // Get xData from x
    const xData = xScale.invert(x);
    // console.log("xData: ", xData);
    // Get dataIndex form xData
    // https://github.com/d3/d3-array/blob/master/README.md#bisect
    const bisect = d3.bisector((d) => d.x).center;
    const dataIndex = bisect(trails[0].paths, xData);
    // console.log("dataIndex: ", dataIndex);
    // Get y from dataIndex
    const y = yScale(trails[0].paths[dataIndex].y);
    // Update focus point
    focus.attr("cx", x).attr("cy", y);
  };

  const qq = svg
    .append("rect")
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr("width", width)
    .attr("height", height)
    // .on("mouseover", mouseover);
    .on("mousemove", mousemove);
  // .on('mouseout', mouseout);

  showAxis &&
    drawAxis({ svg, xScale, yScale, width, height, xMax, yMin, yMax });
  for (let i = 0; i < trails.length; i++) {
    const trail = trails[i];
    const color = colors[i];
    const gradientId = createGradient({ svg, color, index: i });
    drawLine({ svg, xScale, yScale, trail, color, strokeWidth, mousemove });
    showArea &&
      drawArea({ svg, xScale, height, yScale, trail, gradientId, mousemove });
    showPOI && drawPOIs({ svg, xScale, yScale, trail });
  }
  // draw mousemove rect
  // https://www.d3-graph-gallery.com/graph/line_cursor.html
  const focus = svg
    .append("circle")
    .attr("class", "focus")
    .attr("r", 8)
    .style("opacity", 1);
};

export default refresh;
