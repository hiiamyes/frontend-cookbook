import styled from "styled-components";
import { labelPadding, gridGap } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
import {
  colorBorderDefault,
  colorBorderHover,
  colorBackgroundModal
} from "../../styles/color";

export default styled.div`
  > .tr {
    display: grid;
    grid: 1fr / 1fr 1fr 1fr;
    border-bottom: 1px solid ${colorBorderDefault};
    &:hover {
      background: ${colorBorderHover};
    }
  }
`;
