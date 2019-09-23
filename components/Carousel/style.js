import styled from "styled-components";
import { labelPadding, gridGap } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBackgroundModal
} from "../../styles/color";

export default styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${colorBackgroundModal};
    > .prev,
    > .next,
    > .close {
      position: absolute;
      display: ${props => (props.actionsVisible ? "block" : "none")};
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      outline: none;
      width: 48px;
      height: 48px;
    }
    > .close {
      right: 0;
      top: 0;
    }
    > .prev {
      left: 0;
      top: calc(50% - 48px / 2);
    }
    > .next {
      right: 0;
      top: calc(50% - 48px / 2);
    }
    > .items {
      display: flex;
      width: 100%;
      height: 100%;
      > .item {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    > .indicators {
      position: absolute;
      width: 100%;
      height: 48px;
      bottom: 0;
      display: ${props => (props.actionsVisible ? "flex" : "none")};
      justify-content: center;
      align-items: center;
      > .indicator {
        width: 8px;
        height: 8px;
        padding: 5px;
        border-radius: 50px;
        background: none;
        border: 1px solid white;
        margin-right: 10px;
        cursor: pointer;
        outline: none;
        &.active {
          background: white;
          &:hover {
            background: white;
          }
        }
        &:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }
  img {
    width: 100px;
    object-fit: contain;
  }
`;
