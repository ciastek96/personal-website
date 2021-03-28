import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Carousel.module.scss";

const Carousel = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  const variants = {
    right: { rotate: 180 },
    left: { rotate: 0 },
  };

  return (
    <motion.div
      className={styles.wrapper}
      onPan={(e, { delta: { x } }) => {
        if (x > 2) setIsToggle(false);
        if (x < -2) setIsToggle(true);
      }}
    >
      <motion.div className={styles.innerWrapper}>
        {React.Children.map(children || null, (child, i) => {
          return (
            <child.type
              {...child.props}
              key={i}
              data-index={i}
              className={
                isToggle === !!i ? `${styles.slideActive}` : `${styles.slide}`
              }
            />
          );
        })}
      </motion.div>
      <motion.button
        name="toggle button"
        animate={isToggle ? "right" : "left"}
        variants={variants}
        className={styles.button}
        onClick={() => setIsToggle(!isToggle)}
      />
    </motion.div>
  );
};

export default Carousel;
