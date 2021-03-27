import { useState } from "react";
import Head from "next/head";
import Heading from "../components/Heading/Heading";
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
        <Heading>Contact Me</Heading>
        <ContactForm setIsModalOpen={setIsModalOpen} />
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </section>
    </Layout>
  );
}
