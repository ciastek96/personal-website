import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Carousel.module.scss";
import ArrowIcon from "../../public/icons/svg/directional/arrow-right.svg";

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const elements = children.length;

  const handleNext = () => {
    if (current < elements - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 75) {
      handleNext();
    }

    if (touchStart - touchEnd < -75) {
      handlePrev();
    }
  }

  const variants = {
    open: { rotate: 0 },
    closed: { rotate: 90 },
  };

  return (
    <div
      className={styles.wrapper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* <button onClick={handlePrev} className={styles.prev}>
        prev
      </button> */}

      <div className={styles.innerWrapper}>
        {React.Children.map(children || null, (child, i) => {
          return (
            <child.type
              {...child.props}
              key={i}
              data-index={i}
              className={
                current === i ? `${styles.slideActive}` : `${styles.slide}`
              }
            />
          );
        })}
      </div>
      {/* <button onClick={handleNext} className={styles.next}>
        next
      </button> */}
      <motion.button
        animate={current ? "open" : "closed"}
        variants={variants}
        className={styles.iconWrapper}
        onClick={current === 0 ? handleNext : handlePrev}
      >
        {/* {current === 0 ? <p>next</p> : <p>back</p>} */}
        <ArrowIcon
          className={
            current === 0 ? styles.arrowIconRight : styles.arrowIconLeft
          }
        />
      </motion.button>
    </div>
  );
};

export default Carousel;
