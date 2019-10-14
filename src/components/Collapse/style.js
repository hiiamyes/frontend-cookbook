import styled from "styled-components";

export default styled.div`
  > .toggle {
    display: inline-block;
  }
  > .detail {
    overflow: hidden;
    height: 0;
    transition: height 0.35s ease;
    &.visible {
      height: ${props => `${props.height}px`};
    }
  }
`;
