import Image from "next/image";
import { Router, useRouter } from "next/router";
import styles from "./NotFound.module.scss";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animations/animations";
import Button from "../Button/Button";

const NotFoundImage = ({ className }) => (
  <Image
    priority
    src={`/images/undraw_page_not_found_su7k.svg`}
    height={400}
    width={600}
    quality="80"
    alt="Not found image"
    className={className}
  />
);

const NotFound = () => {
  const router = useRouter();

  return (
    <motion.div variants={fadeInUp} className={styles.wrapper}>
      <NotFoundImage className={styles.image} />
      <p>Seems like you get lost</p>
      <Button onClick={() => router.back()}>Go back</Button>
    </motion.div>
  );
};

export default NotFound;
