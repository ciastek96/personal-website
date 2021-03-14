import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";
import Heading from "../components/Heading/Heading";
import SkillsWrapper from "../components/SkillsWrapper/SkillsWrapper";
import Carousel from "../components/Carousel/Carousel";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Resume</h1>
        <Carousel>
          <div>
            <Heading>Div 1</Heading>
          </div>
          <div>
            <Heading>Div 2</Heading>
          </div>
        </Carousel>
      </section>
    </Layout>
  );
}
