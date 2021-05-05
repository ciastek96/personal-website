import styles from "./AboutMe.module.scss";

const info = {
  city: "Gliwice",
  country: "Poland",
  age: "24",
  "e-mail": "kamil.kolacz@outlook.com",
};

const AboutMe = () => (
  <div className={styles.wrapper}>
    <p>
      I'm a beginner frontend developer looking for first commercial experience.
      In my projects I put a strong emphasis on visual aspects.
    </p>
    <div className={styles.innerWrapper}>
      <ul>
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>
            <span className={styles.title}>{key}</span>
            <span className={styles.value}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AboutMe;
