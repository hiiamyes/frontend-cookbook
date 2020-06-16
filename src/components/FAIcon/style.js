import styled from "styled-components";

const sizes = {
  small: "8px",
  default: "16px",
  large: "24px",
};

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: ${(props) => sizes[props.size] || sizes["default"]} !important;
    height: ${(props) => sizes[props.size] || sizes["default"]} !important;
  }
`;
