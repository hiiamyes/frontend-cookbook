import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import FAIcon from "src/components/FAIcon";
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
  const close = () => {
    onClose();
  };
  return (
    <CSSTransition
      in={visible}
      timeout={300}
      classNames="modal"
      unmountOnExit={true}
    >
      <Style>
        <div className="mask"></div>
        <button className="close" onClick={close}>
          <FAIcon icon="times"></FAIcon>
        </button>
        <div className="content">{children}</div>
      </Style>
    </CSSTransition>
  );
};

export default Modal;
