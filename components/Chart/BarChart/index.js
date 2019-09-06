import React, { useEffect, useCallback } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import * as d3 from "d3";

const margin = { top: 50, right: 50, bottom: 100, left: 50 };
let xScale;
let yScale;
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
    .scaleBand()
    .paddingInner(0.5)
    .domain(data.map(({ x }) => x))
    .range([0, width]);
  yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data.map(({ y }) => +y))])
    .range([height, 0]);
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
    .call(d3.axisBottom(xScale));
  svg
    .append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale));
  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .style("fill", "steelblue")
    .attr("class", "bar")
    .attr("x", ({ x }) => xScale(x))
    .attr("width", xScale.bandwidth())
    .attr("y", ({ y }) => yScale(y))
    .attr("height", ({ y }) => height - yScale(y));
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
  svg
    .selectAll(".bar")
    .attr("x", ({ x }) => xScale(x))
    .attr("width", xScale.bandwidth())
    .attr("y", ({ y }) => yScale(y))
    .attr("height", ({ y }) => height - yScale(y));
});

const BarChart = props => {
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

export default BarChart;
