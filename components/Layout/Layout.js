import Head from "next/head";
import { useAppContext } from "../../context";
import { motion } from "framer-motion";
import { stagger } from "../../animations/animations";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Toggle from "../Toggle/Toggle";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

const name = "Kamil Kołacz";
export const siteTitle = "Kamil Kołacz - personal website";

export default function Layout({ children }) {
  //const [isEnabled, toggleDarkMode] = useAppContext();

  return (
    <>
      {/* <Toggle toggleDarkMode={toggleDarkMode} /> */}
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Kamil Kołacz personal website" />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <Header />
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.3 }}
        >
          <motion.main variants={stagger}>{children}</motion.main>
        </motion.div>
        <ScrollToTopButton />
      </div>
    </>
  );
}
