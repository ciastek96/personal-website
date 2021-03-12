import Head from "next/head";
import Link from "next/link";
import Avatar from "../components/Avatar/Avatar";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/contact">Kamil Kołacz</Link>
        <h1>About me</h1>
      </section>
    </Layout>
  );
}
