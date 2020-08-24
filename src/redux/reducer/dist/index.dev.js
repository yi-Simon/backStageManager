"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _loading = _interopRequireDefault(require("./loading"));

var _login = _interopRequireDefault(require("./login"));

var _redux2 = require("@comps/Authorized/redux");

var _redux3 = require("@pages/Acl/User/redux");

var _redux4 = require("@pages/Acl/Role/redux");

var _redux5 = require("@pages/Acl/Permission/redux");

var _redux6 = require("@pages/Edu/Subject/redux");

var _redux7 = require("@pages/Edu/Chapter/redux");

var _redux8 = require("@pages/Edu/Course/redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  loading: _loading["default"],
  user: _redux2.user,
  token: _login["default"],
  userList: _redux3.userList,
  roleList: _redux4.roleList,
  menuList: _redux5.menuList,
  subjectList: _redux6.subjectList,
  chapter: _redux7.chapter,
  courseList: _redux8.courseList
});

exports["default"] = _default;