import styled from "styled-components";

export default styled.div`
  position: relative;
  > .options {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid ${(props) => props.theme.colorDisabled};
    border-radius: ${(props) => props.theme.borderRadius};
    display: none;
  }
  &.on > .options {
    display: grid;
  }
`;
