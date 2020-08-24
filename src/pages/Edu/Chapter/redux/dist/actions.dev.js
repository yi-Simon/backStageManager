"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCourseList = getCourseList;
exports.getChapterList = getChapterList;
exports.getLessonList = getLessonList;
exports.batchDelLesson = batchDelLesson;
exports.batchDelChapter = batchDelChapter;

var _chapter = require("@api/edu/chapter");

var _course = require("@api/edu/course");

var _lesson = require("@api/edu/lesson");

var _constants = require("./constants");

function getCourseListSync(data) {
  return {
    type: _constants.GET_COURSE_LIST,
    data: data
  };
}

function getCourseList() {
  return function (dispatch) {
    (0, _course.reqGetCourseList)().then(function (res) {
      dispatch(getCourseListSync(res));
    });
  };
}

function getChapterListSync(data) {
  return {
    type: _constants.GET_CHAPTER_LIST,
    data: data
  };
}

function getChapterList(courseId) {
  return function (dispatch) {
    (0, _chapter.reqGetChapterList)(courseId).then(function (res) {
      dispatch(getChapterListSync(res));
    });
  };
}

function getLessonListSync(data) {
  return {
    type: _constants.GET_LESSON_LIST,
    data: data
  };
}

function getLessonList(chapterId) {
  return function (dispatch) {
    (0, _lesson.reqGetLessonList)(chapterId).then(function (res) {
      dispatch(getLessonListSync({
        res: res,
        chapterId: chapterId
      }));
    });
  };
}

function batchDelLessonSync(data) {
  return {
    type: _constants.BATCH_DEL_LESSON,
    data: data
  };
}

function batchDelLesson(lessonIds) {
  return function (dispatch) {
    (0, _lesson.reqBatchDelLesson)(lessonIds).then(function (res) {
      dispatch(batchDelLessonSync({
        lessonIds: lessonIds
      }));
    });
  };
}

function batchDelChapterSync(data) {
  return {
    type: _constants.BATCH_DEL_CHAPTER,
    data: data
  };
}

function batchDelChapter(chapterIds) {
  return function (dispatch) {
    (0, _chapter.reqBatchDelChapter)(chapterIds).then(function (res) {
      dispatch(batchDelChapterSync({
        chapterIds: chapterIds
      }));
    });
  };
}