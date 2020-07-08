import * as d3 from "d3";

const margin = { top: 50, right: 50, bottom: 100, left: 50 };

const refresh = ({ chartRef, trail, showPOI, showAxis }) => {
  const data = trail.paths;
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
  const xMax = data[data.length - 1].x;
  const yMin = d3.min(data.map(({ y }) => y));
  const yMax = d3.max(data.map(({ y }) => y));
  const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, width]);
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([height, 0]);
  d3.select(chartRef.current).select("svg").remove();
  const svg = d3
    .select(chartRef.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  showAxis && drawAxis({ svg, xScale, yScale, height, xMax, yMin, yMax });
  createGradient({ svg });
  drawLine({ svg, xScale, yScale, data });
  drawArea({ svg, xScale, height, yScale, data });
  showPOI && drawPOIs({ svg, xScale, yScale, trail });
};

const createGradient = ({ svg }) => {
  // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
  const gradient = svg
    .append("linearGradient")
    .attr("id", "gradient")
    .attr("gradientTransform", "rotate(90)");
  gradient
    .append("stop")
    .attr("offset", "0")
    .attr("stop-color", "rgba(0, 121, 107, 0.2)");
  gradient
    .append("stop")
    .attr("offset", "1")
    .attr("stop-color", "rgba(0, 121, 107, 0)");
};

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

const drawLine = ({ svg, xScale, yScale, data }) => {
  const line = d3
    .line()
    .x(({ x }) => xScale(x))
    .y(({ y }) => yScale(y));
  svg.append("path").datum(data).attr("class", "line").attr("d", line);
};

const drawArea = ({ svg, xScale, height, yScale, data }) => {
  const area = d3
    .area()
    .x(({ x }) => xScale(x))
    .y0(height)
    .y1(({ y }) => yScale(y));
  svg.append("path").datum(data).attr("class", "area").attr("d", area);
};

const drawPOIs = ({ svg, xScale, yScale, trail }) => {
  svg
    .append("g")
    .attr("class", "pois")
    .selectAll("text")
    .data(trail.nodes)
    .enter()
    .append("text")
    .attr("class", "poi")
    .attr("transform", (poi) => {
      return `translate(${xScale(poi.distance)}) rotate(-30)`;
    })
    .selectAll("tspan")
    .data((poi) => [
      poi.name,
      `${(poi.distance / 1000).toFixed(1)}k`,
      `${poi.ele.toFixed(0)}m`,
    ])
    .enter()
    .append("tspan")
    .text((t) => t)
    .attr("x", 0)
    .attr("y", (t, i) => `${i * 1}rem`);
  svg
    .append("g")
    .attr("class", "poilines")
    .selectAll("line")
    .data(trail.nodes)
    .enter()
    .append("line")
    .attr("x1", (poi) => xScale(poi.distance))
    .attr("y1", 10)
    .attr("x2", (poi) => xScale(poi.distance))
    .attr("y2", (poi) => yScale(poi.ele))
    .attr("stroke-width", 1)
    .attr("stroke", "black");
};

export default refresh;
