import styled from "styled-components";

export default styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 1s linear loader infinite;
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
