import styled from "styled-components";
import { inputHeight, inputPadding } from "src/styles/dimension";
import { inputFontSize } from "src/styles/font";
import { borderWidth, borderRadius } from "src/styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus
} from "src/styles/color";

export default styled.div`
  position: relative;
  > .icon {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 32px;
    display: grid;
    justify-items: center;
    align-items: center;
  }
  > input {
    height: ${inputHeight};
    padding: ${inputPadding};
    font-size: ${inputFontSize};
    outline: none;
    border-radius: ${borderRadius};
    border: ${borderWidth} solid ${colorBorderDefault};
    padding-left: 32px;
    &:hover {
      border-color: ${colorBorderHover};
    }
    &:focus {
      border-color: ${colorBorderFocus};
    }
  }
`;
