import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Resume | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Resume</h1>
      </section>
    </Layout>
  );
}
