import React, { useEffect } from "react";
import Style from "./style";

const Modal = props => {
  const { visible, onClose } = props;
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
  if (!visible) return null;
  return <Style className="modal"></Style>;
};

export default Modal;
