import styled from "styled-components";

export default styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: 1s linear loader infinite;
    border-radius: 50%;
    border-color: #767676 transparent transparent;
    border-style: solid;
    border-width: 2px;
  }
  @keyframes loader {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
