import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import NotFoundImage from "../components/NotFoundImage/NotFoundImage";
import utilStyles from "../styles/utils.module.scss";

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>Page not found | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Page not found</h1>
        <NotFoundImage />
        <p>Seems like you get lost</p>
      </section>
    </Layout>
  );
}
