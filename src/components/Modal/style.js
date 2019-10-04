import styled from "styled-components";

const duration = "200ms";

export default styled.div`
  /* mask */
  > .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
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
`;
