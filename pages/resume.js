import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import Heading from "../components/Heading/Heading";
import ResumeWrapper from "../components/ResumeWrapper/ResumeWrapper";
import utilStyles from "../styles/utils.module.scss";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Heading>Resume</Heading>
        <ResumeWrapper />
      </section>
    </Layout>
  );
}
