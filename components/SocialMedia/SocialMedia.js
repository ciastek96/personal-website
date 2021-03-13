import Image from "next/image";
import styles from "./SocialMedia.module.scss";
import GithubIcon from "../../public/icons/github.svg";
import LinkedinIcon from "../../public/icons/linkedin.svg";

const socialData = {
  github: "https://github.com/ciastek96",
  linkedin: "https://linkedin.com/in/kamil-kołacz",
};

const SocialMedia = () => (
  <div className={styles.wrapper}>
    <a href={socialData.github} target="_blank" rel="noopener noreferrer">
      <GithubIcon className={styles.icon} />
    </a>
    <a href={socialData.linkedin} target="_blank" rel="noopener noreferrer">
      <LinkedinIcon className={styles.icon} />
    </a>
  </div>
);

export default SocialMedia;
