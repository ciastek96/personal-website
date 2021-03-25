import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = ({ setIsModalOpen }) => (
  <div className={styles.wrapper}>
    <div className={styles.modal}>
      <div className={styles.message}>
        <h2>Your message has been sent!</h2>
        <p>Thank you for your message! I will respond ASAP!</p>
      </div>
      <Button onClick={() => setIsModalOpen(false)}>ok</Button>
    </div>
  </div>
);

export default Modal;
