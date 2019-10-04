import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Style from "./style";

const Modal = props => {
  const { visible, onClose, children } = props;
  useEffect(() => {
    const keydown = e => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);
  return (
    <CSSTransition
      in={visible}
      timeout={200}
      classNames="modal"
      unmountOnExit={true}
    >
      <Style>
        <div className="mask"></div>
        <div className="content">{children}</div>
      </Style>
    </CSSTransition>
  );
};

export default Modal;
