import styled from "styled-components";

export default styled.div`
  overflow: hidden;
  height: 0;
  &.visible {
    height: ${(props) => `${props.height}px`};
  }
  &.collapse-enter {
    height: 0;
  }
  &.collapse-enter-active {
    height: ${(props) => `${props.height}px`};
    transition: height 0.3s ease;
  }
  &.collapse-enter-done {
    height: ${(props) => `${props.height}px`};
  }
  &.collapse-exit {
    height: ${(props) => `${props.height}px`};
  }
  &.collapse-exit-active {
    height: 0;
    transition: height 0.3s ease;
  }
  &.collapse-exit-done {
    height: 0;
  }
`;
