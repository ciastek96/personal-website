import Image from "next/image";
import { Router, useRouter } from "next/router";
import styles from "./NotFound.module.scss";
import { motion } from "framer-motion";
import { stagger, fadeInUp } from "../../animations/animations";
import Button from "../Button/Button";

const NotFoundImage = ({ className }) => (
  <Image
    src={`/images/404.jpg`}
    height={435}
    width={800}
    quality="100"
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
