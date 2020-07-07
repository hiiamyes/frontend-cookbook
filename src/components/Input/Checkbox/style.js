import styled from "styled-components";

export default styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  /* color: white; */
  > input {
    position: absolute;
    width: 0;
    height: 0;
  }
`;
