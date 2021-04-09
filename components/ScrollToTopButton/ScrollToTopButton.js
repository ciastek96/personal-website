import { useState, useEffect } from "react";
import cx from "classnames";
import styles from "./ScrollToTopButton.module.scss";
import TopIcon from "../../public/icons/svg/directional/angle-up.svg";

const ScrollToTopButton = () => {
  const [isHidden, setIsHidden] = useState(true);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleScroll = (e) => {
    if (window.pageYOffset > 500) setIsHidden(false);
    else setIsHidden(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <button
      className={cx(styles.button, { [styles.hidden]: isHidden })}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <TopIcon className={styles.icon} />
    </button>
  );
};

export default ScrollToTopButton;
