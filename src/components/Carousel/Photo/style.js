import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  > .copyright {
    color: white;
    position: absolute;
    bottom: 48px;
    width: 100%;
    text-align: center;
  }
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
