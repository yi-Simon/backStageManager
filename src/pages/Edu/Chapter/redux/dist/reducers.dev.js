"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = chapter;

var _constants = require("./constants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var init = {
  allCourseList: [],
  chapterList: []
};

function chapter() {
  var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.GET_COURSE_LIST:
      return _objectSpread({}, prevState, {
        allCourseList: action.data
      });

    case _constants.GET_CHAPTER_LIST:
      action.data.items.forEach(function (item) {
        item.children = [];
      });
      return _objectSpread({}, prevState, {
        chapterList: action.data.items
      });

    case _constants.GET_LESSON_LIST:
      var newChapterList = _toConsumableArray(prevState.chapterList);

      newChapterList.forEach(function (item) {
        if (item._id === action.data.chapterId) {
          item.children = action.data.res;
        }
      });
      return _objectSpread({}, prevState, {
        chapterList: newChapterList
      });

    case _constants.BATCH_DEL_CHAPTER:
      var preChapters = _toConsumableArray(prevState.chapterList);

      var delChapters = action.data.chapterIds;
      var newChapters = preChapters.filter(function (item) {
        if (delChapters.indexOf(item._id) === -1) {
          return true;
        }
      });
      console.log(newChapters);
      return _objectSpread({}, prevState, {
        chapterList: newChapters
      });

    case _constants.BATCH_DEL_LESSON:
      var preChapterList = _toConsumableArray(prevState.chapterList);

      console.log(action);
      var delLessonIds = action.data.lessonIds;
      preChapterList.forEach(function (item) {
        item.children = item.children.filter(function (lesson) {
          if (delLessonIds.indexOf(lesson._id) === -1) {
            return true;
          }
        });
      });
      return _objectSpread({}, prevState, {
        chapterList: preChapterList
      });

    default:
      return prevState;
  }
}