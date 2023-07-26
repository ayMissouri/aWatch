import React from "react";
import ReactModal from "react-modal";
import "../App.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      className="MainModal"
      // style={{
      //   overlay: {
      //     backgroundColor: "papayawhip",
      //   },
      //   content: {
      //     color: "lightsteelblue",
      //   },
      // }}
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
