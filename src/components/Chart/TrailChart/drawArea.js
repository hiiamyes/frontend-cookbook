import * as d3 from "d3";

const drawArea = ({
  svg,
  xScale,
  height,
  yScale,
  trail,
  gradientId,
  mousemove,
}) => {
  const area = d3
    .area()
    .x(({ x }) => xScale(x))
    .y0(height)
    .y1(({ y }) => yScale(y));
  svg
    .append("path")
    .datum(trail.paths)
    .attr("class", "area")
    .attr("d", area)
    .attr("fill", `url(#${gradientId})`)
    .on("mousemove", mousemove);
};

export default drawArea;
