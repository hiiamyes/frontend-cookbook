import * as d3 from "d3";

const drawAxis = ({ svg, xScale, yScale, height, xMax, yMin, yMax }) => {
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(xScale)
        .tickValues([0, xMax])
        .tickFormat((d) => `${(d / 1000).toFixed(1)}k`),
    )
    .selectAll("text");
  svg
    .append("g")
    .attr("class", "y axis")
    .call(
      d3
        .axisLeft(yScale)
        .tickValues([yMin, yMax])
        .tickFormat((d) => `${d.toFixed(0)}m`),
    );
};

export default drawAxis;
