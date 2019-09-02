import React, { useEffect } from "react";
import Style from "./style";
import * as d3 from "d3";

const margin = { top: 50, right: 50, bottom: 100, left: 50 };
const container = {
  width: window.innerWidth,
  height: 480
};
const chart = {
  width: container.width - margin.left - margin.right,
  height: container.height - margin.top - margin.bottom
};

const draw = data => {
  const { width, height } = chart;
  const xScale = d3
    .scalePoint()
    .domain(data.map(({ x }) => x))
    .range([0, width]);
  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map(({ y }) => +y))])
    .range([height, 0]);
  const line = d3
    .line()
    .x(({ x }) => xScale(x))
    .y(({ y }) => yScale(y));
  const svg = d3
    .select(".chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "rotate(-90)")
    .attr("y", "0")
    .attr("dy", "0.2rem")
    .style("text-anchor", "start")
    .attr("x", "-4rem");
  svg
    .append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale));
  svg
    .append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);
  svg
    .selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", ({ x }) => xScale(x))
    .attr("cy", ({ y }) => yScale(y))
    .attr("r", 5);
};

const LineChart = props => {
  const { data } = props;
  useEffect(() => {
    draw(data);
  }, []);
  return <Style className="chart" />;
};

export default LineChart;
