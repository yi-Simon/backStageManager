"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = courseList;

var _constants = require("./constants");

var initCourse = [];

function courseList() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initCourse;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.GET_ALL_COURSE:
      return action.data;

    default:
      return prevState;
  }
}