import Link from "next/link";
import styles from "./Nav.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const links = ["projects", "resume", "contact"];

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={utilStyles.list}>
      {links.map((link, i) => (
        <li key={i} className={utilStyles.listItem}>
          <Link href={`/${link}`}>{link}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
