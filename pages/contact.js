import { useState } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import Modal from "../components/Modal/Modal";
import utilStyles from "../styles/utils.module.scss";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout>
      <Head>
        <title>Contact | {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Contact Me</h1>
        <ContactForm setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </section>
    </Layout>
  );
}
