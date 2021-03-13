import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import utilStyles from "../styles/utils.module.scss";

export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>Contact| {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Contact Me</h1>
        <ContactForm />
      </section>
    </Layout>
  );
}
