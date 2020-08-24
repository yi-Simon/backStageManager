import React from "react";
import { Router } from "react-router-dom";
import history from "@utils/history";

import { IntlProvider } from "react-intl";
import { zh, en } from "./locales";

import Layout from "./layouts";
// 引入重置样式（antd已经重置了一部分了）
import "./assets/css/reset.css";

function App() {
  const locale = "en";
  const message = locale === "en" ? en : zh;
  return (
    <Router history={history}>
      <IntlProvider locale={locale} messages={message}>
        <Layout />
      </IntlProvider>
    </Router>
  );
}

export default App;
