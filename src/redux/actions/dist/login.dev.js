"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.removeToken = exports.mobileLogin = exports.login = void 0;

var _login = require("@api/acl/login");

var _login2 = require("../constants/login");

var _oauth = require("@api/acl/oauth");

/**
 * 登陆
 */
var loginSuccessSync = function loginSuccessSync(user) {
  return {
    type: _login2.LOGIN_SUCCESS,
    data: user
  };
}; //账号登录


var login = function login(username, password) {
  return function (dispatch) {
    return (0, _login.reqLogin)(username, password).then(function (response) {
      dispatch(loginSuccessSync(response)); // 返回token，外面才能接受

      return response.token;
    });
  };
}; //手机登录


exports.login = login;

var mobileLoginSuccessSync = function mobileLoginSuccessSync(user) {
  return {
    type: _login2.MOBILE_TOKEN,
    data: user
  };
};

var mobileLogin = function mobileLogin(phone, verify) {
  return function (dispatch) {
    return (0, _oauth.reqMobileLogin)(phone, verify).then(function (response) {
      dispatch(loginSuccessSync(response)); // 返回token，外面才能接受

      return response.token;
    });
  };
};
/**
 * 删除token
 */


exports.mobileLogin = mobileLogin;

var removeToken = function removeToken() {
  return {
    type: _login2.REMOVE_TOKEN
  };
};
/**
 * 登出
 */


exports.removeToken = removeToken;

var logout = function logout() {
  return function (dispatch) {
    return (0, _login.reqLogout)().then(function () {
      dispatch(removeToken());
    });
  };
};

exports.logout = logout;