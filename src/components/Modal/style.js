import styled from "styled-components";
import { labelPadding, gridGap } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
import { CSSTransition } from "react-transition-group";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBackgroundModal
} from "../../styles/color";

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${colorBackgroundModal};

  &.modal-enter {
    opacity: 0;
  }
  &.modal-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;
