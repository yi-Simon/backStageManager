import {
  GET_CHAPTER_LIST,
  GET_LESSON_LIST,
  GET_COURSE_LIST,
  BATCH_DEL_LESSON,
  BATCH_DEL_CHAPTER,
} from "./constants";

const init = { allCourseList: [], chapterList: [] };

export default function chapter(prevState = init, action) {
  switch (action.type) {
    case GET_COURSE_LIST:
      return {
        ...prevState,
        allCourseList: action.data,
      };
    case GET_CHAPTER_LIST:
      action.data.items.forEach((item) => {
        item.children = [];
      });
      return {
        ...prevState,
        chapterList: action.data.items,
      };
    case GET_LESSON_LIST:
      const newChapterList = [...prevState.chapterList];
      newChapterList.forEach((item) => {
        if (item._id === action.data.chapterId) {
          item.children = action.data.res;
        }
      });
      return {
        ...prevState,
        chapterList: newChapterList,
      };
    case BATCH_DEL_CHAPTER:
      const preChapters = [...prevState.chapterList];
      const delChapters = action.data.chapterIds;
      const newChapters = preChapters.filter((item) => {
        if (delChapters.indexOf(item._id) === -1) {
          return true;
        }
      });
      console.log(newChapters);
      return {
        ...prevState,
        chapterList: newChapters,
      };
    case BATCH_DEL_LESSON:
      const preChapterList = [...prevState.chapterList];
      console.log(action);
      const delLessonIds = action.data.lessonIds;
      preChapterList.forEach((item) => {
        item.children = item.children.filter((lesson) => {
          if (delLessonIds.indexOf(lesson._id) === -1) {
            return true;
          }
        });
      });
      return {
        ...prevState,
        chapterList: preChapterList,
      };
    default:
      return prevState;
  }
}
