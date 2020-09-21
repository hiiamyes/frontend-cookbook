import * as d3 from "d3";

// https://github.com/d3/d3-axis

const drawAxis = ({ svg, xScale, yScale, width, height, xMax, yMin, yMax }) => {
  const xAxisTickValueInterval = 1000;
  const xAxisTickValues = [
    ...[...new Array(Math.floor(xMax / xAxisTickValueInterval))].map(
      (_, i) => i * xAxisTickValueInterval,
    ),
    xMax,
  ];
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(xScale)
        .ticks(5)
        // .tickValues(xAxisTickValues)
        .tickSize(-height)
        .tickFormat((d) => `${(d / 1000).toFixed(1)}k`),
    )
    .selectAll("text")
    .attr("y", "10px");
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(xScale)
        .tickValues([xMax])
        .tickSize(-height)
        .tickFormat((d) => `${(d / 1000).toFixed(1)}k`),
    )
    .selectAll("text")
    .attr("y", "10px");

  const yAxisTickValueInterval = 500;
  const yAxisTickValues =
    yMax - yMin > yAxisTickValueInterval
      ? [
          yMin,
          ...[
            ...new Array(
              Math.ceil(yMax / yAxisTickValueInterval) -
                Math.ceil(yMin / yAxisTickValueInterval),
            ),
          ].map(
            (_, i) =>
              (Math.ceil(yMin / yAxisTickValueInterval) + i) *
              yAxisTickValueInterval,
          ),
          yMax,
        ]
      : [yMin, yMax];
  svg
    .append("g")
    .attr("class", "y axis")
    .call(
      d3
        .axisLeft(yScale)
        .ticks(4)
        // .tickValues(yAxisTickValues)
        .tickSize(-width)
        .tickFormat((d) => `${d.toFixed(0)}m`),
    )
    .selectAll("text")
    .attr("x", "-10px");
  svg
    .append("g")
    .attr("class", "y axis")
    .call(
      d3
        .axisLeft(yScale)
        .tickValues([yMin, yMax])
        .tickSize(-width)
        .tickFormat((d) => `${d.toFixed(0)}m`),
    )
    .selectAll("text")
    .attr("x", "-10px");
};

export default drawAxis;
