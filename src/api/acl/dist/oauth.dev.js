"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqGetVerifyCode = reqGetVerifyCode;
exports.reqMobileLogin = reqMobileLogin;

var _request = _interopRequireDefault(require("@utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "oauth";

function reqGetVerifyCode(mobile) {
  return (0, _request["default"])({
    url: "".concat(BASE_URL, "/sign_in/digits"),
    method: "POST",
    data: {
      mobile: mobile
    }
  });
}

function reqMobileLogin(mobile, code) {
  return (0, _request["default"])({
    url: "".concat(BASE_URL, "/mobile"),
    method: "POST",
    data: {
      mobile: mobile,
      code: code
    }
  });
}