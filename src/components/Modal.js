import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

const Modal = ({ showModal, children, onClose }) => {
  if (!showModal) {
    return null;
  }

  const closeModalHandler = (event) => {
    onClose();
  };

  return ReactDom.createPortal(
    <div className={classes["modal-container"]} onClick={closeModalHandler}>
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
