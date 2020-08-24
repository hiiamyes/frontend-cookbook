import styled from "styled-components";

export default styled.button`
  /* normalize */
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
  box-shadow: none;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: ${(props) => props.theme.padding};

  /* enable */
  height: ${(props) => props.theme.height};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colorEnable};
  /* background: ${(props) => props.theme.colorEnable}; */

  /* focused */
  &.focused {
    color: ${(props) => props.theme.colorFocused};
  }

  /* hover  */
  &.hover {
    color: ${(props) => props.theme.colorHover};
  }

  /* pressed */
  &.pressed {
    color: ${(props) => props.theme.colorPressed};
  }

  /* loading */
  &.loading {
    cursor: not-allowed;
  }

  /* disabled */
  &.disabled {
    color: ${(props) => props.theme.colorDisabled};
    cursor: not-allowed;
  }
`;
