import styled from "styled-components";
import { borderRadius } from "../../../styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBorderFocus,
} from "../../../styles/color";

const selectInputHeight = "32px";
const selectOptionHeight = "32px";

export default styled.div`
  position: relative;
  border-radius: ${borderRadius};
  border: 1px solid ${colorBorderDefault};
  display: grid;
  grid: 1fr / 1fr 32px;
  align-items: center;
  &:hover {
    border: 1px solid ${colorBorderHover};
  }
  &.focus {
    border: 1px solid ${colorBorderFocus};
  }
  > input {
    border-radius: ${borderRadius};
    height: ${selectInputHeight};
    padding: 0 5px;
    outline: none;
    border: none;
  }
  .options {
    position: absolute;
    overflow-y: scroll;
    width: 100%;
    height: calc(10 * ${selectOptionHeight});
    left: 0;
    top: calc(5px + ${selectOptionHeight});
    border-radius: ${borderRadius};
    border: 1px solid ${colorBorderDefault};
    background: white;
    z-index: 100;

    .option {
      overflow-x: hidden;
      text-overflow: ellipsis;
      padding: 5px;
      height: ${selectOptionHeight};
      cursor: default;
      &.select {
        background: rgba(0, 150, 136, 0.5);
      }
      &:hover,
      &.hover {
        background: rgba(0, 150, 136, 0.2);
      }
    }
  }
`;
