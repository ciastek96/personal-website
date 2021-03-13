import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import SkillsWrapper from "../components/SkillsWrapper/SkillsWrapper";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Heading>About me</Heading>
        <p>Hi! I'm a beginner frontend developer. </p>
        <Heading>Skills</Heading>
        <SkillsWrapper />
      </section>
    </Layout>
  );
}
