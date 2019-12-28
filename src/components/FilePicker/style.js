import styled from "styled-components";
import { borderWidth, borderRadius } from "../../styles/border";
import { colorBorderDefault, colorBorderHover } from "../../styles/color";

const width = "150px";
const height = width;

export default styled.div`
  position: relative;
  > .default-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${width};
    height: ${height};
    border: ${borderWidth} dashed ${colorBorderDefault};
    border-radius: ${borderRadius};
    cursor: pointer;
    &:hover {
      border-color: ${colorBorderHover};
    }
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
`;
