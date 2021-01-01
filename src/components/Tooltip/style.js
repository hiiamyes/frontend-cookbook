import styled from "styled-components";

const SIZE = "10px";

export default styled.div`
  background: black;
  color: white;
  display: inline-block;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 10px;
  position: relative;

  /* tooltip position: top  */
  &:before {
    position: absolute;
    bottom: -${SIZE};
    left: calc(100% / 2 - ${SIZE});
    content: "";
    border-left: ${SIZE} solid transparent;
    border-right: ${SIZE} solid transparent;
    border-top: ${SIZE} solid black;
  }
`;
