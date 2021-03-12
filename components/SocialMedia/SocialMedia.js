import Image from "next/image";
import styles from "./SocialMedia.module.scss";

const socialData = [
  {
    href: "https://github.com/ciastek96",
    src: "github.svg",
  },
  {
    href: "https://linkedin.com/in/kamil-kołacz",
    src: "linkedin.svg",
  },
];

const SocialMedia = () => (
  <div className={styles.wrapper}>
    {socialData.map((el, i) => (
      <a key={i} href={el.href} target="_blank" rel="noopener noreferrer">
        <Image src={`/icons/${el.src}`} height={18} width={18} />
      </a>
    ))}
  </div>
);

export default SocialMedia;
