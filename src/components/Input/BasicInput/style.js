import styled from "styled-components";

export default styled.div`
  border: 1px solid ${(props) => props.theme.colorAssistive2};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  height: ${(props) => props.theme.heightInput};
  background: white;
  > input {
    flex: 1;
    outline: none;
    width: 100%;
    height: 100%;
    border: none;
    padding: ${(props) => props.theme.paddingInput};
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
