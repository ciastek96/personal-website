import Link from "next/link";
import styles from "./Nav.module.scss";
import utilStyles from "../../styles/utils.module.scss";

const pages = [
  {
    name: "about me",
    path: "",
  },
  {
    name: "projects",
    path: "projects",
  },
  {
    name: "resume",
    path: "resume",
  },
  {
    name: "contact",
    path: "contact",
  },
];

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={utilStyles.list}>
      {pages.map(({ name, path }, i) => (
        <li key={i} className={utilStyles.listItem}>
          <Link activeClassName="active" href={`/${path}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
