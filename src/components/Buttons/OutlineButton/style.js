import styled from "styled-components";

export default styled.button`
  /* normalize */
  outline: none;
  background: none;
  border: 1px solid ${(props) => props.theme.colorEnable};
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: ${(props) => props.theme.padding};

  /* enable */
  height: ${(props) => props.theme.height};
  border-radius: ${(props) => props.theme.borderRadius};
  /* color: ${(props) => props.theme.colorText}; */
  /* background: ${(props) => props.theme.colorEnable}; */

  /* focused */
  &.focused {
    border-color: ${(props) => props.theme.colorFocused};
  }

  /* hover  */
  &.hover {
    border-color: ${(props) => props.theme.colorHover};
  }

  /* pressed */
  &.pressed {
    border-color: ${(props) => props.theme.colorPressed};
  }

  /* loading */
  &.loading {
    cursor: not-allowed;
  }

  /* disabled */
  &.disabled {
    border-color: ${(props) => props.theme.colorDisabled};
    cursor: not-allowed;
  }
`;
