import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.scss";

export default function Success() {
  return (
    <div>
      <Head>
        <title>Your message has been sent | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Your message has been sent</h1>
        <p>Thank you for your message! I will ask you ASAP!</p>
      </section>
    </div>
  );
}
