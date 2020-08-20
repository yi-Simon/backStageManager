import {
  GET_CHAPTER_LIST,
  GET_LESSON_LIST,
  GET_COURSE_LIST,
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
      console.log(action.data);
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
    default:
      return prevState;
  }
}
