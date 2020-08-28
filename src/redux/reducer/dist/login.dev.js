"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _login = require("../constants/login");

var initToken = localStorage.getItem("user_token") || "";

function token() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initToken;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _login.LOGIN_SUCCESS:
      return action.data.token;

    case _login.REMOVE_TOKEN:
      return "";

    default:
      return prevState;
  }
}

var _default = token;
exports["default"] = _default;