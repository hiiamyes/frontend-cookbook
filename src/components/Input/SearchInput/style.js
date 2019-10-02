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
  width: 240px;
  > .search {
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
    width: 100%;
    height: ${inputHeight};
    padding: ${inputPadding};
    font-size: ${inputFontSize};
    outline: none;
    border-radius: ${borderRadius};
    border: ${borderWidth} solid ${colorBorderDefault};
    padding: 0 32px;
    &:hover {
      border-color: ${colorBorderHover};
    }
    &:focus {
      border-color: ${colorBorderFocus};
    }
  }
  .clear {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 32px;
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: pointer;
  }
`;
