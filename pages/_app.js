import React, { useState } from "react";
import "../styles/global.scss";
import { AppWrapper } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
