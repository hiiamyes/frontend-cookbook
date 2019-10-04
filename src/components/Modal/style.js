import styled from "styled-components";
import { labelPadding, gridGap } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
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
`;
