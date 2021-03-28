import styles from "./Heading.module.scss";
import { motion } from "framer-motion";
import { scaleIn } from "../../animations/animations.js";

const Heading = ({ children }) => (
  <motion.div variants={scaleIn} className={styles.heading}>
    <h1>{children}</h1>
  </motion.div>
);

export default Heading;
