import styled from "styled-components";

const selectInputHeight = "32px";
const selectOptionHeight = "32px";

export default styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colorBorderDefault};
  display: grid;
  grid: 1fr / 1fr 32px;
  align-items: center;
  &:hover {
    border: 1px solid ${(props) => props.theme.colorBorderHover};
  }
  &.focus {
    border: 1px solid ${(props) => props.theme.colorBorderFocus};
  }
  > input {
    border-radius: ${(props) => props.theme.borderRadius};
    height: ${selectInputHeight};
    padding: 0 5px;
    outline: none;
    border: none;
  }
  .options {
    position: absolute;
    overflow-y: scroll;
    width: 100%;
    height: calc(10 * ${selectOptionHeight});
    left: 0;
    top: calc(5px + ${selectOptionHeight});
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colorBorderDefault};
    background: white;
    z-index: 100;

    .option {
      overflow-x: hidden;
      text-overflow: ellipsis;
      padding: 5px;
      height: ${selectOptionHeight};
      cursor: default;
      &.select {
        background: rgba(0, 150, 136, 0.5);
      }
      &:hover,
      &.hover {
        background: rgba(0, 150, 136, 0.2);
      }
    }
  }
`;
