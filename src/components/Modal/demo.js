import React, { useState } from "react";
import Modal from "./index";

const ModalDemo = () => {
  const [visible, setVisible] = useState(true);
  const open = () => setVisible(true);
  const close = () => setVisible(false);
  return (
    <div>
      <button onClick={open}>open</button>
      <Modal visible={visible} onClose={close} />
    </div>
  );
};

export default ModalDemo;
