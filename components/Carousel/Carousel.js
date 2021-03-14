import React, { useState } from "react";
import styles from "./Carousel.module.scss";
import Heading from "../Heading/Heading";
import SkillsWrapper from "../SkillsWrapper/SkillsWrapper";

const data = [
  {
    heading: "Heading 1",
    content:
      "Vero lorem sed nonumy eos kasd rebum est, lorem sed et tempor ut at justo magna at diam, dolor et.",
  },
  {
    heading: "Heading 2",
    content:
      "Sed amet sadipscing kasd sea nonumy clita diam. Et lorem elitr elitr sadipscing lorem ipsum, amet amet et dolores dolores est et, est.",
  },
];

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const elements = data.length;

  const handleNext = () => {
    if (current < elements - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handlePrev} className={styles.prev}>
        prev
      </button>
      {/* {data.map((el, index) => (
        <div
          key={index}
          className={
            current === index ? `${styles.slideActive}` : `${styles.slide}`
          }
          data-index={index}
        >
          <h2>{el.heading}</h2>
          <p>{el.content}</p>
        </div>
      ))} */}
      {/* <div
        className={current === 0 ? `${styles.slideActive}` : `${styles.slide}`}
        data-index="0"
      >
        <Heading>About me</Heading>
        <p>Hi! I'm a beginner frontend developer. </p>
        <Heading>Skills</Heading>
        <SkillsWrapper />
      </div>
      <div
        className={current === 1 ? `${styles.slideActive}` : `${styles.slide}`}
        data-index="1"
      >
        <h2>narson</h2>
        <p>elunia</p>
      </div> */}
      <>
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
      </>
      <button onClick={handleNext} className={styles.next}>
        next
      </button>
    </div>
  );
};

export default Carousel;
