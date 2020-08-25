"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = intlLanguage;

var _intl = require("../constants/intl");

var initIntl = window.navigator.language === "en" ? "en" : "zh";

function intlLanguage() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initIntl;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _intl.INTL_LANGUAGE:
      return action.data;

    default:
      return prevState;
  }
}