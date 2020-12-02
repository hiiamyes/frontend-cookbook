import styled from "styled-components";
export default styled.div`
  .focus {
    stroke: white;
    stroke-width: 2px;
    fill: #00796b;
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
