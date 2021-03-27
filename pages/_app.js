import React, { useState } from "react";
import "../styles/global.scss";
import { AnimatePresence, motion } from "framer-motion";
import { AppWrapper } from "../context";
import Router from "next/dist/next-server/lib/router/router";

export default function App({ Component, pageProps, router }) {
  return (
    <AppWrapper>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AppWrapper>
  );
}
