import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <>
      <form
        name="contact"
        id="contact"
        action="/success"
        method="POST"
        data-netlify="true"
        className={styles.form}
      >
        <input type="hidden" name="contact" value="contact"></input>
        <div className={styles.inputWrapper}>
          <input type="text" name="name" placeholder=" " required />
          <label htmlFor="name">Full name</label>
        </div>
        <div className={styles.inputWrapper}>
          <input type="text" name="email" placeholder=" " required />
          <label htmlFor="name">E-mail</label>
        </div>
        <div className={styles.inputWrapper}>
          <textarea name="content" placeholder=" " required />
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
