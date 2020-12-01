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
    // .on("mousemove", (d, i) => {
    //   console.log(new Date());
    // })
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // draw mousemove rect
  // https://www.d3-graph-gallery.com/graph/line_cursor.html
  const focus = svg
    .append("circle")
    .style("fill", "none")
    .attr("stroke", "black")
    .attr("r", 8.5)
    .style("opacity", 1);
  const mousemove = (e) => {
    console.log(e);
    console.log(d3.pointer(e));
    // https://github.com/d3/d3-selection/blob/master/README.md#pointer
    const [x, _] = d3.pointer(e);
    // https://github.com/d3/d3-array/blob/master/README.md#bisect
    const i = d3.bisect(trails[0].paths, x0, 1);
    y = yScale(trails[0][i].paths.y);
    focus.attr("cx", x).attr("cy", y);
    // focus.attr("cx", x(selectedData.x)).attr("cy", y(selectedData.y));
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
    drawLine({ svg, xScale, yScale, trail, color, strokeWidth });
    showArea && drawArea({ svg, xScale, height, yScale, trail, gradientId });
    showPOI && drawPOIs({ svg, xScale, yScale, trail });
  }
};

export default refresh;
