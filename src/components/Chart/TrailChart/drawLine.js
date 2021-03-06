import * as d3 from "d3";

const drawLine = ({
  svg,
  xScale,
  yScale,
  trail,
  color,
  strokeWidth,
  mousemove,
}) => {
  const line = d3
    .line()
    .x(({ x }) => xScale(x))
    .y(({ y }) => yScale(y));
  svg
    .append("path")
    .datum(trail.paths)
    .attr("class", "line")
    .attr("d", line)
    .attr("stroke", color)
    .attr("stroke-width", strokeWidth)
    .on("mousemove", mousemove);
};

export default drawLine;
