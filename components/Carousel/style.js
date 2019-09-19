import styled from "styled-components";
import { labelPadding, gridGap } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBackgroundModal
} from "../../styles/color";

export default styled.div`
  .bb {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colorBackgroundModal};
    > .prev {
      width: 48px;
      height: 48px;
      position: absolute;
      left: 0;
      top: calc(50% - 48px / 2);
    }
    > .next {
      position: absolute;
      right: 0;
      width: 48px;
      height: 48px;
      top: calc(50% - 48px / 2);
    }
    > .cc {
      display: flex;
      width: 100%;
      > .ccc {
        width: 100%;
        flex-shrink: 0;
      }
    }
  }
  img {
    width: 100px;
    object-fit: contain;
  }
`;
