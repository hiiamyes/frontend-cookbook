import styled from "styled-components";

const sizes = {
  small: "8px",
  default: "16px"
};

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: ${props => sizes[props.size] || sizes["default"]} !important;
  }
`;
