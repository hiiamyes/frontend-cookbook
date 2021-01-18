import styled from "styled-components";

const sizes = {
  s: "16px",
  m: "24px",
  l: "32px",
};

export default styled.div`
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
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
