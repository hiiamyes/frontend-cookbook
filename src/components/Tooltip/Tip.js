import styled from "styled-components";

const triangleSize = "8px";
const height = "32px";

export default styled.div`
  position: fixed;
  background: black;
  color: white;
  display: none;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius};
  height: ${height};
  padding: 0 10px;
  left: ${(props) => props.rect.left}px;
  top: calc(${(props) => props.rect.top}px - ${height});

  &.hover {
    display: flex;
  }
  /* tooltip position: top  */
  &:before {
    position: absolute;
    bottom: -${triangleSize};
    left: calc(100% / 2 - ${triangleSize});
    content: "";
    border-left: ${triangleSize} solid transparent;
    border-right: ${triangleSize} solid transparent;
    border-top: ${triangleSize} solid black;
  }
`;
