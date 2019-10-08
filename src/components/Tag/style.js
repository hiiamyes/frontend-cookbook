import styled from "styled-components";
import { borderRadius } from "src/styles/border";

export default styled.div`
  padding: 0 5px;
  height: 32px;
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  border-radius: ${borderRadius};
  align-items: center;
  cursor: default;
  > :nth-child(n + 2) {
    margin-left: 5px;
  }
  > button.delete {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    outline: none;
    border: none;
    color: white;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.hover {
      display: flex;
    }
  }
`;
