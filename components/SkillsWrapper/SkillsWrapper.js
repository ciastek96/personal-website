import Image from "next/image";
import styles from "./SkillsWrapper.module.scss";

const Img = ({ name, className }) => (
  <Image
    priority
    src={`/images/${name}.svg`}
    height={80}
    width={80}
    quality="80"
    alt={`${name} logotype`}
    className={className}
  />
);

const skills = [
  "html-5",
  "css-3",
  "sass",
  "javascript",
  "react",
  "redux",
  "adobe-photoshop",
];

const SkillWrapper = () => (
  <div className={styles.wrapper}>
    {skills.map((skill, i) => (
      <Img key={i} name={skill} className={styles.image} />
    ))}
  </div>
);

export default SkillWrapper;
