import React from "react";
import styles from "./Modal.module.scss";
import Button from "../Button/Button";
import { AnimatePresence, motion } from "framer-motion";
import { stagger, fadeInUp, scaleIn } from "../../animations/animations";

const Modal = ({ setIsModalOpen }) => (
  <AnimatePresence exitBeforeEnter>
    <motion.div variants={stagger} className={styles.wrapper}>
      <motion.div variants={scaleIn} className={styles.modal}>
        <motion.div variants={fadeInUp} className={styles.message}>
          <h2>Your message has been sent!</h2>
          <p>Thank you for your message! I will respond ASAP!</p>
          <Button variants={fadeInUp} onClick={() => setIsModalOpen(false)}>
            ok
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

export default Modal;
