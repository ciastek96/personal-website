import Image from "next/image";
import Link from "next/link";
import styles from "./Avatar.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const Avatar = () => (
  <Link href="/" className={styles.wrapper}>
    <Image
      priority
      src="/images/profile.jpg"
      className={utilStyles.borderCircle}
      height={400}
      width={400}
      quality="90"
      alt="My picture"
    />
  </Link>
);

export default Avatar;
