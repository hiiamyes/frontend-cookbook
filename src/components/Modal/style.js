import styled from "styled-components";
import { modalMaskZIndex } from "src/styles/zIndex";

const duration = "200ms";

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  > .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${modalMaskZIndex};
    animation: fadeIn ${duration} ease-in-out forwards;
  }
  &.modal-exit-active > .mask {
    animation: fadeOut ${duration} ease-in-out forwards;
  }
  @keyframes fadeIn {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.7);
    }
  }
  @keyframes fadeOut {
    0% {
      background: rgba(0, 0, 0, 0.7);
    }
    100% {
      background: rgba(0, 0, 0, 0);
    }
  }

  > .content {
    background: white;
    max-width: 640px;
    width: calc(100% - 30px);
    margin: 64px auto 15px auto;
    border-radius: 4px;
    padding: 5px;
    animation: fadeInOpacity ${duration} ease-in-out forwards;
  }
  &.modal-exit-active > .content {
    animation: fadeOutOpacity ${duration} ease-in-out forwards;
  }
  @keyframes fadeInOpacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOutOpacity {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  > button.close {
    position: absolute;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    outline: none;
    width: 48px;
    height: 48px;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;