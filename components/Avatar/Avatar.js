import Image from "next/image";
import Link from "next/link";
import styles from "./Avatar.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const Avatar = () => (
  <Link href="/" className={styles.wrapper}>
    <a>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={250}
        width={250}
        quality="85"
        layout="intrinsic"
        alt="My picture"
      />
    </a>
  </Link>
);

export default Avatar;
