import styled from "styled-components";
import { inputHeight, inputPadding } from "src/styles/dimension";
import { inputFontSize } from "src/styles/font";
import { borderWidth, borderRadius } from "src/styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus
} from "src/styles/color";

const formInputHeight = "48px";

export default styled.div`
  position: relative;
  width: 240px;
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadius};
  border: ${borderWidth} solid ${colorBorderDefault};
  justify-content: center;
  height: ${formInputHeight};
  cursor: text;
  &:hover {
    border-color: ${colorBorderHover};
  }
  &.focus {
    border-color: ${colorBorderFocus};
  }
  > label {
    padding-left: ${inputPadding};
    line-height: 1;
    transition: color ease-in-out 100ms;
    z-index: -1;
    color: black;
    font-size: 1rem;
    &.active {
      color: ${colorBorderHover};
    }
  }
  > input {
    width: 100%;
    padding: 0 ${inputPadding};
    height: 0px;
    font-size: ${inputFontSize};
    outline: none;
    border: none;
    transition: height ease-in-out 100ms;
    &.active {
      height: 24px;
    }
  }
`;
