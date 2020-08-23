import styled from "styled-components";

export default styled.div`
  > .thead {
    > .tr {
      display: grid;
      border-bottom: 1px solid ${(props) => props.theme.colorSecondary};
      &:hover {
        background: ${(props) => props.theme.colorSecondary};
      }
    }
  }
  > .tbody {
    > .tr {
      display: grid;
      border-bottom: 1px solid ${(props) => props.theme.colorSecondary};
      &:hover {
        background: ${(props) => props.theme.colorSecondary};
      }
    }
  }
`;
