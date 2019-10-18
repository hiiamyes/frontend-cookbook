import styled from "styled-components";
import { colorPrimary, gray200, gray50 } from "src/styles/color";

export default styled.div`
  height: 300px;
  overflow-y: scroll;
  background: ${gray50};
  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${gray200};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colorPrimary};
  }
`;
