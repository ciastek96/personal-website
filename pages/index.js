import Head from "next/head";
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
        <p>Hi! I'm Kamil 👋</p>
        <p>
          I'm a beginner frontend developer looking for first commercial
          experience. In my projects I put a strong emphasis on visual aspects.
        </p>
        <Heading>Skills</Heading>
        <SkillsWrapper />
      </section>
    </Layout>
  );
}
