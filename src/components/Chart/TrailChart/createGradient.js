// https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient
const createGradient = ({ svg, color, index }) => {
  const gradientId = `gradient-${index}`;
  const gradient = svg
    .append("linearGradient")
    .attr("id", gradientId)
    .attr("gradientTransform", "rotate(90)");
  gradient
    .append("stop")
    .attr("offset", "0")
    .attr("stop-color", color)
    .attr("stop-opacity", "0.2");
  gradient
    .append("stop")
    .attr("offset", "1")
    .attr("stop-color", color)
    .attr("stop-opacity", "0");
  return gradientId;
};

export default createGradient;
