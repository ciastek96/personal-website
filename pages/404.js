import Head from "next/head";
import Link from "next/link";
import Heading from "../components/Heading/Heading";
import { stagger, fadeInUp } from "../animations/animations";
import Layout, { siteTitle } from "../components/Layout/Layout";
import NotFoundWrapper from "../components/NotFound/NotFound";
import utilStyles from "../styles/utils.module.scss";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page not found | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Heading>Page not found</Heading>
        <motion.div variants={stagger}>
          <NotFoundWrapper />
        </motion.div>
      </section>
    </Layout>
  );
}
