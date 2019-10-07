import styled from "styled-components";
import { borderRadius } from "src/styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus
} from "src/styles/color";

export default styled.button`
  border: 1px solid ${colorBorderDefault};
  border-radius: ${borderRadius};
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  &:hover {
    border: 1px solid ${colorBorderHover};
  }
  &:focus {
    border: 1px solid red;
  }
  &:active {
    border: 1px solid ${colorBorderFocus};
  }
`;
