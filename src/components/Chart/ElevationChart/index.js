import React, { useEffect, useCallback } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import * as d3 from "d3";

const margin = { top: 50, right: 50, bottom: 100, left: 50 };
let xScale;
let yScale;
let line;
let area;
let svg;

const draw = data => {
  const container = {
    width: window.innerWidth,
    height: 480
  };
  const chart = {
    width: container.width - margin.left - margin.right,
    height: container.height - margin.top - margin.bottom
  };
  const { width, height } = chart;
  xScale = d3
    .scalePoint()
    .domain(data.map(({ x }) => x))
    .range([0, width]);
  yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map(({ y }) => +y))])
    .range([height, 0]);
  line = d3
    .line()
    .x(({ x }) => xScale(x))
    .y(({ y }) => yScale(y));
  area = d3
    .area()
    .x(({ x }) => xScale(x))
    .y0(height)
    .y1(({ y }) => yScale(y));
  svg = d3
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
    .append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);
};

const resize = debounce(150, () => {
  const container = {
    width: window.innerWidth,
    height: 480
  };
  const chart = {
    width: container.width - margin.left - margin.right,
    height: container.height - margin.top - margin.bottom
  };
  const { width, height } = chart;
  xScale.range([0, width]);
  yScale.range([height, 0]);
  svg
    .select(".x.axis")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));
  svg.select(".y.axis").call(d3.axisLeft(yScale));
  svg.selectAll(".line").attr("d", line);
});

const LineChart = props => {
  const { data } = props;
  useEffect(() => {
    draw(data);
  }, []);

  const onResize = useCallback(() => {
    resize(data);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return <Style className="chart" />;
};

export default LineChart;
