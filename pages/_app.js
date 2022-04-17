import "../styles/globals.css";

import { store } from "../app/store";
import React from "react";
import { render } from "react-dom";
import { Provider } from "redux";
import { createStore } from "redux";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
