"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCourse = getAllCourse;

var _constants = require("./constants");

var _course = require("@api/edu/course");

function getAllCouorseSync(data) {
  return {
    type: _constants.GET_ALL_COURSE,
    data: data
  };
}

function getAllCourse() {
  return function (dispatch) {
    return (0, _course.reqGetCourseList)().then(function (res) {
      dispatch(getAllCouorseSync(res));
    });
  };
}