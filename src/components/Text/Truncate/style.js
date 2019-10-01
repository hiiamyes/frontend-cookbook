import styled from "styled-components";
import { inputHeight, inputPadding } from "../../../styles/dimension";
import { inputFontSize } from "../../../styles/font";
import { borderWidth, borderRadius } from "../../../styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus
} from "../../../styles/color";

export default styled.input`
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
`;
