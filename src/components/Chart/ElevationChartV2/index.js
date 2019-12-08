import React, { createRef, useEffect, useCallback } from "react";
import { debounce } from "lodash/fp";
import Style from "./style";
import * as d3 from "d3";

const margin = { top: 50, right: 50, bottom: 100, left: 50 };
let xScale;
let yScale;
let line;
let area;
let svg;

const draw = (chartRef, data, nodes) => {
  const container = {
    width: window.innerWidth,
    height: 400
  };
  const chart = {
    width: container.width - margin.left - margin.right,
    height: container.height - margin.top - margin.bottom
  };
  const { width, height } = chart;
  const xMin = 0;
  const xMax = data[data.length - 1].x;
  const yMin = d3.min(data.map(({ y }) => y));
  const yMax = d3.max(data.map(({ y }) => y));
  xScale = d3
    .scaleLinear()
    .domain([xMin, xMax])
    .range([0, width]);
  yScale = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .range([height, 50]);
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
        .tickValues([xMin, xMax])
        .tickFormat(d => `${(d / 1000).toFixed(1)}k`)
    )
    .selectAll("text");
  svg
    .append("g")
    .attr("class", "y axis")
    .call(
      d3
        .axisLeft(yScale)
        .tickValues([yMin, yMax])
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
  svg
    .append("g")
    .attr("class", "nodes")
    .selectAll("text")
    .data(nodes)
    .enter()
    .append("text")
    .attr("class", "node")
    .attr("transform", (n, i) => {
      return `translate(${xScale(n.distance)}) rotate(-30)`;
    })
    .selectAll("tspan")
    .data(n => [
      n.name,
      `${(n.distance / 1000).toFixed(1)}k`,
      `${n.ele.toFixed(0)}m`
    ])
    .enter()
    .append("tspan")
    .text(t => t)
    .attr("x", 0)
    .attr("y", (t, i) => `${i * 1}rem`);
  svg
    .append("g")
    .attr("class", "nodelines")
    .selectAll("line")
    .data(nodes)
    .enter()
    .append("line")
    .attr("x1", n => xScale(n.distance))
    .attr("y1", 10)
    .attr("x2", n => xScale(n.distance))
    .attr("y2", n => yScale(n.ele))
    .attr("stroke-width", 1)
    .attr("stroke", "black");
};

const resize = debounce(150, (data, nodes) => {
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
  yScale.range([height, 50]);
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
  const { data, nodes } = props;
  const chartRef = createRef();
  useEffect(() => {
    draw(chartRef, data, nodes);
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
