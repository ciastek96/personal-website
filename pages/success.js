import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import utilStyles from "../styles/utils.module.scss";

export default function Success() {
  return (
    <Layout>
      <Head>
        <title>Your message has been sent | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Your message has been sent</h1>
        <p>Thank you for your message! I will ask you ASAP!</p>
      </section>
    </Layout>
  );
}
