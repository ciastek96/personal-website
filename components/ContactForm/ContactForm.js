import { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
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
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
    }
  };

  return (
    <>
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
    </>
  );
};

export default ContactForm;
