import styles from "./Toggle.module.scss";

const Toggle = ({ toggleDarkMode }) => {
  return (
    <label htmlFor="toggle" className={styles.toggle} onChange={toggleDarkMode}>
      <input type="checkbox" id="toggle" className={styles.input} />
      <div className={styles.fill}></div>
    </label>
  );
};

export default Toggle;
