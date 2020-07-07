import styled from "styled-components";

export default styled.div`
  display: grid;
  grid: 1fr / repeat(auto-fill, 20px);
  grid-gap: 10px;
  height: ${(props) => props.theme.heightInput};
  background: white;
  > input {
    outline: none;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colorPrimary};
    background: transparent;
    &:-webkit-autofill {
      box-shadow: 0 0 0 100px white inset !important;
    }
    &::placeholder {
      color: ${(props) => props.theme.colorTertiary};
    }
  }
  &.hover {
    border-color: ${(props) => props.theme.colorMainBlue};
  }
  &.focused {
    border-color: ${(props) => props.theme.colorMainBlue};
  }
  &.error {
    border-color: ${(props) => props.theme.colorRed};
  }
  &.disabled {
    cursor: not-allowed;
    background: ${(props) => props.theme.colorAssistive2};
    > input {
      cursor: not-allowed;
    }
  }
`;
