import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > * {
    flex: 0 0 auto;
  }
  .pagination-page {
    margin: 0 14px;
  }
  .page-link {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    &.disabled {
      cursor: not-allowed;
      pointer-events: none;
    }
  }
`;
