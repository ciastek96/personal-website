import React, { useEffect } from "react";
import "../styles/global.scss";
import { AnimatePresence } from "framer-motion";
import { AppWrapper } from "../context";

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    Array.from(
      document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach((node) => {
      node.removeAttribute("data-n-p");
    });
    const mutationHandler = (mutations) => {
      mutations.forEach(({ target }) => {
        if (target.nodeName === "STYLE") {
          if (target.getAttribute("media") === "x") {
            target.removeAttribute("media");
          }
        }
      });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
      subtree: true,
      attributeFilter: ["media"],
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppWrapper>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AppWrapper>
  );
}
