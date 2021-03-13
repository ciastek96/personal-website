import styles from "./ContactForm.module.scss";

const ContactForm = () => (
  <form action="#" className={styles.form}>
    <input type="text" name="name" placeholder="Full name" required />
    <input type="text" name="email" placeholder="Email address" required />
    <textarea name="content" placeholder="Message content" required></textarea>
    <button type="submit">Send</button>
  </form>
);

export default ContactForm;
