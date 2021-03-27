import styles from "./Heading.module.scss";
import OpenTagIcon from "../../public/icons/opentag.svg";
import CloseTagIcon from "../../public/icons/closetag.svg";
import { motion } from "framer-motion";
import { stagger, fadeInUp, scaleIn } from "../../animations/animations.js";

const Heading = ({ children }) => (
  <motion.div variants={scaleIn} className={styles.heading}>
    <h1>{children}</h1>
  </motion.div>
);

export default Heading;
