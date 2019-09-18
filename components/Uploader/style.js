import styled from "styled-components";
import { labelPadding } from "../../styles/dimension";
import { borderWidth, borderRadius } from "../../styles/border";
import { colorBorderDefault, colorBorderHover } from "../../styles/color";

export default styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: ${borderWidth} solid ${colorBorderDefault};
  border-radius: ${borderRadius};
  cursor: pointer;
  &:hover {
    border-color: ${colorBorderHover};
  }
  > input {
    display: block;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    position: absolute;
    opacity: 0;
  }
  > .label {
    padding: ${labelPadding};
  }
  > .preview {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: contain;
  }
`;
