import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import SocialMedia from "../SocialMedia/SocialMedia";
import Avatar from "../Avatar/Avatar";
import Nav from "../Nav/Nav";

const Header = () => (
  <header className={styles.header}>
    <Avatar />
    <h1 className={utilStyles.headingLg}>Kamil Kołacz</h1>
    <p>Frontend developer</p>
    <SocialMedia />
    <Nav />
  </header>
);

export default Header;
