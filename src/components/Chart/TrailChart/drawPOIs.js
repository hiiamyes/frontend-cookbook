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

export default drawPOIs;
