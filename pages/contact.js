import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout/Layout";
import ContactForm from "../components/ContactForm/ContactForm";
import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import utilStyles from "../styles/utils.module.scss";

export default function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <Layout>
      <Head>
        <title>Contact| {siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1>Contact Me</h1>
        <ContactForm setIsModalOpen={setIsModalOpen} />
        <Button onClick={() => setIsModalOpen(!isModalOpen)}>Open modal</Button>
        {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </section>
    </Layout>
  );
}
