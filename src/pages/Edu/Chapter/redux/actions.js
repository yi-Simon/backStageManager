import { reqGetChapterList, reqBatchDelChapter } from "@api/edu/chapter";
import { reqGetCourseList } from "@api/edu/course";
import { reqGetLessonList, reqBatchDelLesson } from "@api/edu/lesson";
import {
  GET_CHAPTER_LIST,
  GET_LESSON_LIST,
  GET_COURSE_LIST,
  BATCH_DEL_LESSON,
  BATCH_DEL_CHAPTER,
} from "./constants";

function getCourseListSync(data) {
  return { type: GET_COURSE_LIST, data };
}

export function getCourseList() {
  return (dispatch) => {
    reqGetCourseList().then((res) => {
      dispatch(getCourseListSync(res));
    });
  };
}
function getChapterListSync(data) {
  return { type: GET_CHAPTER_LIST, data };
}

export function getChapterList(courseId) {
  return (dispatch) => {
    reqGetChapterList(courseId).then((res) => {
      dispatch(getChapterListSync(res));
    });
  };
}
function getLessonListSync(data) {
  return { type: GET_LESSON_LIST, data };
}

export function getLessonList(chapterId) {
  return (dispatch) => {
    reqGetLessonList(chapterId).then((res) => {
      dispatch(getLessonListSync({ res, chapterId }));
    });
  };
}
function batchDelLessonSync(data) {
  return { type: BATCH_DEL_LESSON, data };
}

export function batchDelLesson(lessonIds) {
  return (dispatch) => {
    reqBatchDelLesson(lessonIds).then((res) => {
      dispatch(batchDelLessonSync({ lessonIds }));
    });
  };
}
function batchDelChapterSync(data) {
  return { type: BATCH_DEL_CHAPTER, data };
}

export function batchDelChapter(chapterIds) {
  return (dispatch) => {
    reqBatchDelChapter(chapterIds).then((res) => {
      dispatch(batchDelChapterSync({ chapterIds }));
    });
  };
}
