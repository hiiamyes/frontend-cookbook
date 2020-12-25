import styled from "styled-components";

export default styled.div`
  border: 1px solid ${(props) => props.theme.colorEnable};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  height: ${(props) => props.theme.heightInput};
  background: white;
  > .icon {
    padding-left: ${(props) => props.theme.paddingLeft};
    color: ${(props) => props.theme.colorEnable};
  }
  > input {
    flex: 1;
    grid-area: 1fr;
    outline: none;
    width: 100%;
    height: 100%;
    border: none;
    padding: ${(props) => props.theme.paddingInput};
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colorEnable};
    background: transparent;
    &:-webkit-autofill {
      box-shadow: 0 0 0 100px white inset !important;
    }
    &::placeholder {
      color: ${(props) => props.theme.colorTertiary};
    }
  }
  &.hover {
    border-color: ${(props) => props.theme.colorHover};
  }
  &.focuse {
    border-color: ${(props) => props.theme.colorFocus};
  }
  &.error {
    border-color: ${(props) => props.theme.colorRed};
  }
  &.disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.colorDisable};
    border-color: ${(props) => props.theme.colorDisable};
    > input {
      cursor: not-allowed;
    }
  }
  &.loading {
  }
`;
