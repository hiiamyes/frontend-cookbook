import styled from "styled-components";
import { modalMaskZIndex } from "src/styles/zIndex";

const duration = "200ms";

export default styled.div`
  /* mask */
  > .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: ${modalMaskZIndex};
  }
  &.modal-enter > .mask {
    background: rgba(0, 0, 0, 0);
  }
  &.modal-enter-active > .mask {
    background: rgba(0, 0, 0, 0.7);
    transition: background ${duration};
  }
  &.modal-enter-done > .mask {
    background: rgba(0, 0, 0, 0.7);
  }
  &.modal-exit > .mask {
    background: rgba(0, 0, 0, 0.7);
  }
  &.modal-exit-active > .mask {
    background: rgba(0, 0, 0, 0);
    transition: background ${duration};
  }

  /* content */
  > .content {
    background: white;
    width: 640px;
    border-radius: 4px;
    padding: 5px;
  }
  &.modal-enter > .content {
    opacity: 0;
  }
  &.modal-enter-active > .content {
    opacity: 1;
    transition: opacity ${duration};
  }
  &.modal-enter-done > .content {
    opacity: 1;
  }
  &.modal-exit > .content {
    opacity: 1;
  }
  &.modal-exit-active > .content {
    opacity: 0;
    transition: opacity ${duration};
  }

  > button.close {
    position: fixed;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    outline: none;
    width: 48px;
    height: 48px;
    right: 0;
    top: 0;
  }
`;
