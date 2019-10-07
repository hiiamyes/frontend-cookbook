import styled from "styled-components";

const menuWidth = "240px";

export default styled.div`
  position: fixed;
  top: 48px;
  left: 0;
  height: 100%;
  z-index: 1200;
  .background {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    outline: none;
    opacity: ${props => (props.visible ? 1 : 0)};
    width: ${props => (props.visible ? "100vw" : 0)};
  }
  .menu {
    display: flex;
    flex-direction: column;
    background: white;
    height: 100%;
    padding: 20px;
    width: ${menuWidth};
    position: fixed;
    z-index: 1200;
    top: 0;
    left: 0;
    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2),
      0px 16px 24px 2px rgba(0, 0, 0, 0.14),
      0px 6px 30px 5px rgba(0, 0, 0, 0.12);
    transition: 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    visibility: ${props => (props.visible ? "visible" : "hidden")};
    transform: ${props =>
      props.visible
        ? "translate3d(0px, 0px, 0px)"
        : `translatex(-${menuWidth})`};

    > a {
      padding: 5px 0;
      font-size: 1.5rem;
      text-decoration: none;
    }
  }
`;
