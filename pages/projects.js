import Head from "next/head";
import Heading from "../components/Heading/Heading";
import Layout, { siteTitle } from "../components/Layout/Layout";
import ProjectsWrapper from "../components/ProjectsWrapper/ProjectsWrapper";
import utilStyles from "../styles/utils.module.scss";

export default function Projects() {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects | {siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <Heading>Projects</Heading>
          <ProjectsWrapper />
        </section>
      </Layout>
    </>
  );
}
