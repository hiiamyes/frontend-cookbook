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
    background: white;
    z-index: ${(props) => props.theme.zIndexModal};
    > button {
      white-space: nowrap;
    }
  }
  &.on > .options {
    display: grid;
  }
`;
