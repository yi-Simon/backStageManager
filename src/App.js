import React from "react";
import { Router } from "react-router-dom";
import history from "@utils/history";

import { IntlProvider } from "react-intl";
import { zh, en } from "./locales";

import Layout from "./layouts";
// 引入重置样式（antd已经重置了一部分了）
import "./assets/css/reset.css";
import { connect } from "react-redux";

import enUS from "antd/es/locale/en_US";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";

function App(props) {
  const locale = props.intlLanguage;
  const messages = locale === "en" ? en : zh;
  const antLocale = locale === "en" ? enUS : zhCN;
  return (
    <Router history={history}>
      <ConfigProvider locale={antLocale}>
        <IntlProvider locale={locale} messages={messages}>
          <Layout />
        </IntlProvider>
      </ConfigProvider>
    </Router>
  );
}

export default connect((state) => ({ intlLanguage: state.intlLanguage }))(App);
// export default App;
