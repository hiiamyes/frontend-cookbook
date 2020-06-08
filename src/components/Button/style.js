import styled from "styled-components";
import { borderRadius } from "src/styles/border";
import {
  colorPrimary,
  colorPrimaryHover,
  colorPrimaryFocus,
  colorPrimaryActive,
  colorPrimaryDisabled,
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus,
} from "src/styles/color";

export default styled.button`
  /* border: 1px solid ${colorPrimary}; */
  border: none;
  background: ${colorPrimary};
  border-radius: ${borderRadius};
  outline: none;
  cursor: pointer;
  height: 32px;
  padding: 0px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  /* padding: 5px 10px; */
  /* no hover on mobile */
  user-select: none;
  &:hover {
    /* border: 1px solid ${colorPrimaryHover}; */
    background: ${colorPrimaryHover};
  }
  /* 
    https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    When using a mouse, "activation" typically starts when the user presses down the primary mouse button.
  */
 &:active {
    background: ${colorPrimaryActive};
  }
    /* trigger by tag */
  &:focus {
    /* border: 1px solid red; */
    background: ${colorPrimaryFocus};
  }

  &:disabled {
    background: ${colorPrimaryDisabled};
    cursor: not-allowed;
  }
`;
