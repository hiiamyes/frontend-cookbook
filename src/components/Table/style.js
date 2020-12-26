import styled from "styled-components";

export default styled.div`
  > .mobile {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
  > .thead {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    > .tr {
      display: grid;
      border-bottom: 1px solid ${(props) => props.theme.colorSecondary};
      &:hover {
        background: ${(props) => props.theme.colorTableHover};
      }
    }
  }
  > .tbody {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
    > .tr {
      display: grid;
      border-bottom: 1px solid ${(props) => props.theme.colorSecondary};
      &:hover {
        background: ${(props) => props.theme.colorTableHover};
      }
    }
  }
`;
