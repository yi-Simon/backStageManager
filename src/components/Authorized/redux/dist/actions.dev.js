"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserMenu = exports.getUserInfo = void 0;

var _constants = require("./constants");

var _login = require("@api/acl/login");

function getUserInfoSync(data) {
  return {
    type: _constants.GET_USERINFO,
    data: data
  };
}

var getUserInfo = function getUserInfo() {
  return function (dispatch) {
    return (0, _login.getInfo)().then(function (res) {
      dispatch(getUserInfoSync(res));
      return res;
    });
  };
};

exports.getUserInfo = getUserInfo;

function getUserMenuSync(data) {
  return {
    type: _constants.GET_USERMENU,
    data: data
  };
}

var getUserMenu = function getUserMenu() {
  return function (dispatch) {
    return (0, _login.getMenu)().then(function (res) {
      dispatch(getUserMenuSync(res && res.permissionList));
      return res && res.permissionList;
    });
  };
};

exports.getUserMenu = getUserMenu;