import styled from "styled-components";

export default styled.div`
  position: relative;
  > select {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
