import styles from "./Button.module.scss";
import SpinnerIcon from "../../public/icons/svg/spinner/circle-o-notch.svg";

const Button = ({ isLoading, ...props }) => (
  <button {...props} className={styles.button}>
    {isLoading ? <SpinnerIcon className={styles.spinner} /> : props.children}
  </button>
);

export default Button;
