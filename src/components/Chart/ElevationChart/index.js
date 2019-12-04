import React, {createRef, useEffect, useCallback } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import * as d3 from "d3";

const margin = { top: 50, right: 50, bottom: 100, left: 50 };
let xScale;
let yScale;
let line;
let area;
let svg;

const draw = (chartRef, data) => {
  const container = {
    width: window.innerWidth,
    height: 400
  };
  const chart = {
    width: container.width - margin.left - margin.right,
    height: container.height - margin.top - margin.bottom
  };
  const { width, height } = chart;
  xScale = d3
    .scaleLinear()
    .domain([0, data[data.length - 1].x])
    .range([0, width]);
  yScale = d3
    .scaleLinear()
    .domain([d3.min(data.map(({ y }) => y)), d3.max(data.map(({ y }) => y))])
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
    .select(chartRef.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(
      d3
        .axisBottom(xScale)
        .tickValues([0, data[data.length - 1].x])
        .tickFormat(d => `${(d / 1000).toFixed(1)}k`)
    )
    .selectAll("text");
  svg
    .append("g")
    .attr("class", "y axis")
    .call(
      d3
        .axisLeft(yScale)
        .tickValues([
          d3.min(data.map(({ y }) => y)),
          d3.max(data.map(({ y }) => y))
        ])
        .tickFormat(d => `${d.toFixed(0)}m`)
    );
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

const resize = debounce(150, data => {
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
    .call(
      d3
        .axisBottom(xScale)
        .tickValues([0, data[data.length - 1].x])
        .tickFormat(d => `${(d / 1000).toFixed(1)}k`)
    );
  svg.select(".y.axis").call(
    d3
      .axisLeft(yScale)
      .tickValues([
        d3.min(data.map(({ y }) => y)),
        d3.max(data.map(({ y }) => y))
      ])
      .tickFormat(d => `${d.toFixed(0)}m`)
  );
  svg.selectAll(".line").attr("d", line);
  svg.selectAll(".area").attr("d", area);
});

const LineChart = props => {
  const { data } = props;
  const chartRef = createRef()
  useEffect(() => {
    draw(chartRef, data);
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

  return <Style ref={chartRef} />;
};

export default LineChart;
