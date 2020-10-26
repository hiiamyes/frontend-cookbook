import styled from "styled-components";

const selectInputHeight = "32px";
const selectOptionHeight = "32px";

export default styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  /* border: 1px solid ${(props) => props.theme.colorBorderDefault}; */
  border: 1px solid ${(props) => props.theme.colorEnable};
  display: grid;
  grid: 1fr / 1fr 32px;
  align-items: center;
  &:hover {
    /* border: 1px solid ${(props) => props.theme.colorBorderHover}; */
    border: 1px solid ${(props) => props.theme.colorHover};
  }
  &.focus {
    /* border: 1px solid ${(props) => props.theme.colorBorderFocus}; */
    border: 1px solid ${(props) => props.theme.colorFocus};
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
    width: calc(100% + 2px);
    max-height: calc(10 * ${selectOptionHeight});
    left: -1px;
    top: calc(5px + ${selectOptionHeight});
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colorEnable};
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
