import styled from "styled-components";

export default styled.div`
  > .label {
    font-size: ${props => props.theme.fontSizeH5};
    line-height: ${props => props.theme.lineHeightH5};
    color: ${props => props.theme.colorSecondary};
  }
`;
