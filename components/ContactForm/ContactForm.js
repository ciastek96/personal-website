import { useState } from "react";
import { fadeInUp, stagger } from "../../animations/animations";
import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";
import { motion } from "framer-motion";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = ({ setIsModalOpen }) => {
  const [contactData, setContactData] = useState({
    fullname: "",
    email: "",
    content: "",
  });
  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.length) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...contactData }),
      })
        .then(() => {
          setIsModalOpen(true);
          console.log("Form successfully submitted");
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <motion.div variants={fadeInUp}>
      <p>
        Full in a form or send a message to{" "}
        <a href="mailto:ciastek1996@gmail.com">ciastek1996@gmail.com</a>
      </p>
      <form
        name="contact"
        id="contact"
        //action="/success"
        method="POST"
        data-netlify="true"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="contact" value="contact"></input>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            name="name"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Full name</label>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            name="email"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label htmlFor="name">E-mail</label>
        </div>
        <div className={styles.inputWrapper}>
          <textarea
            name="content"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Write your message...</label>
        </div>
      </form>
      <Button type="submit" form="contact">
        Send
      </Button>
    </motion.div>
  );
};

export default ContactForm;
