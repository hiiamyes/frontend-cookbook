import styled from "styled-components";
import { labelPadding, gridGap } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
import { colorBorderDefault, colorBorderHover } from "../../styles/color";

const width = "150px";

export default styled.div`
  display: grid;
  grid: 1fr / repeat(3, ${width});
  grid-gap: ${gridGap};
  position: relative;
  > input {
    display: block;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    position: absolute;
    opacity: 0;
  }
  > .uploader {
    padding: ${labelPadding};
    width: ${width};
    height: ${width};
    border: ${borderWidth} solid ${colorBorderDefault};
    border-radius: ${borderRadius};
    cursor: pointer;
    &:hover {
      border-color: ${colorBorderHover};
    }
  }
  > .preview {
    width: ${width};
    height: ${width};
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${borderWidth} solid ${colorBorderDefault};
    border-radius: ${borderRadius};
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
