import styled from "styled-components";

export default styled.div`
  > .children {
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease;
    &.visible {
      height: ${(props) => `${props.height}px`};
    }
  }
`;
