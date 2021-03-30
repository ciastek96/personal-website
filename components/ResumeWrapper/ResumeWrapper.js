import styles from "./ResumeWrapper.module.scss";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animations/animations.js";

const ResumeWrapper = () => (
  <motion.div variants={stagger} className={styles.wrapper}>
    <motion.div variants={fadeInUp} className={styles.innerWrapper}>
      <h5>Education</h5>
      <ul>
        {data.education.map(({ name, city, date, degree, subject }, i) => (
          <li key={i}>
            <div className={styles.header}>
              <p className={styles.timeline}>{date}</p>
              <p>{city}</p>
            </div>
            <h6>{name}</h6>
            <p>{degree}</p>
            <p>{subject}</p>
          </li>
        ))}
      </ul>
    </motion.div>
    <motion.div variants={fadeInUp} className={styles.innerWrapper}>
      <h5>Employment history</h5>
      <ul>
        {data.employment.map(({ date, city, company, stance }, i) => (
          <li key={i}>
            <div className={styles.header}>
              <p className={styles.timeline}>{date}</p>
              <p>{city}</p>
            </div>
            <h6>{company}</h6>
            <p>{stance}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const data = {
  education: [
    {
      name: "Silesian University of Technology",
      city: "Gliwice",
      date: "Oct 2017 - Feb 2021",
      degree: "Bachelor of Engineering",
      subject: "Computer science at the Faculty of Electronics",
    },
    {
      name: "Technical and Computer Science School Complex No. 1",
      city: "Gliwice",
      date: "Sep 2012 - May 2016",
      degree: "",
      subject: "Computer Science",
    },
  ],
  employment: [
    {
      date: "2015 - Present",
      city: "Pyskowice",
      company: "URO-MK",
      stance: "Construction Worker",
    },
    {
      date: "Jul - Aug 2016 & 2017",
      city: "Røyse",
      company: "C/O Trond Western",
      stance: "Seasonal harvest worker",
    },
  ],
};

export default ResumeWrapper;
