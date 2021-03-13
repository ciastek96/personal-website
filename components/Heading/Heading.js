import styles from "./Heading.module.scss";
import OpenTagIcon from "../../public/icons/opentag.svg";
import CloseTagIcon from "../../public/icons/closetag.svg";

const Heading = ({ children }) => (
  <header className={styles.heading}>
    {/* <OpenTagIcon className={styles.tag} /> */}
    <h1>{children}</h1>
    {/* <CloseTagIcon className={styles.tag} /> */}
  </header>
);

export default Heading;
