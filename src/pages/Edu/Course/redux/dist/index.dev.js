"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getAllCourse", {
  enumerable: true,
  get: function get() {
    return _actions.getAllCourse;
  }
});
Object.defineProperty(exports, "courseList", {
  enumerable: true,
  get: function get() {
    return _reducers["default"];
  }
});

var _actions = require("./actions");

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }