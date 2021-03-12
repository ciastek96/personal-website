import styles from "./Toggle.module.scss";

const Toggle = () => (
  <label htmlFor="toggle" className={styles.toggle}>
    <input type="checkbox" id="toggle" className={styles.input} />
    <div className={styles.fill}></div>
  </label>
);

export default Toggle;
