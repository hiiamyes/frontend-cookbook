import styled from "styled-components";

const selectInputHeight = "32px";
const selectOptionHeight = "32px";

export default styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: ${selectInputHeight};

  > input {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    flex: 1;
    border: 1px solid ${(props) => props.theme.colorEnable};
    border-radius: ${(props) => props.theme.borderRadius};
    height: ${selectInputHeight};
    padding: 0 5px;
    outline: none;
  }
  > .icon {
    width: 32px;
  }
  > .no-option {
    position: absolute;
    width: calc(100% + 2px);
    left: -1px;
    top: calc(5px + ${selectOptionHeight});
    border-radius: ${(props) => props.theme.borderRadius};
    border: 1px solid ${(props) => props.theme.colorEnable};
    padding: 5px;
    height: ${selectOptionHeight};
    background: white;
    z-index: 100;
  }
  > .options {
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
