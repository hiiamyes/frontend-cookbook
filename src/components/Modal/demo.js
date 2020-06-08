import React, { useState } from "react";
import Modal from "src/components/Modal";
import useModal from "src/components/Modal/useModal";

const ModalDemo = () => {
  const { visible, openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      <Modal visible={visible} onClose={closeModal}>
        <div
          style={{
            background: "white",
            maxWidth: "640px",
            width: "calc(100% - 30px)",
            margin: "64px auto 15px auto",
            borderRadius: "4px",
            padding: "5px",
          }}
        >
          Modal Content
        </div>
      </Modal>
    </div>
  );
};

export default ModalDemo;
