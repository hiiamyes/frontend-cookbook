import styled from "styled-components";
export default styled.div`
  .focus {
    stroke: red;
    stroke-width: 5px;
  }
  .line {
    fill: none;
  }
  .x.axis {
    path {
      stroke-width: 0;
    }
    line {
      stroke-dasharray: 4;
    }
  }
  .y.axis {
    path {
      stroke-width: 0;
    }
    line {
      stroke-dasharray: 4;
    }
  }
`;
