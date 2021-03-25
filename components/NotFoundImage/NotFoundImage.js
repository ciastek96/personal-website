import NotFoundImg from "../../public/images/undraw_page_not_found_su7k.svg";
import Image from "next/image";
import styles from "./NotFoundImage.module.scss";

const NotFoundImage = () => (
  <Image
    priority
    src={`/images/undraw_page_not_found_su7k.svg`}
    height={400}
    width={600}
    quality="80"
    alt="Not found image"
    className={styles.image}
  />
);

export default NotFoundImage;
