import styled from "styled-components";
import { inputHeight, inputPadding } from "../../../styles/dimension";
import { inputFontSize } from "../../../styles/font";
import { borderWidth, borderRadius } from "../../../styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus
} from "../../../styles/color";

export default styled.div`
  > input {
    width: 200px;
    height: ${inputHeight};
    padding: ${inputPadding};
    font-size: ${inputFontSize};
    text-align: left;
    outline: none;
    border-radius: ${borderRadius};
    border: ${borderWidth} solid ${colorBorderDefault};
    &:hover {
      border-color: ${colorBorderHover};
    }
    &:focus {
      border-color: ${colorBorderFocus};
    }
    &[disabled] {
      color: rgba(0, 0, 0, 0.25);
      background-color: #f5f5f5;
      cursor: not-allowed;
    }
  }
`;
