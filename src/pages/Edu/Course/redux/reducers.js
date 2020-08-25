import { GET_ALL_COURSE } from "./constants";

const initCourse = [];

export default function courseList(prevState = initCourse, action) {
  switch (action.type) {
    case GET_ALL_COURSE:
      return action.data;
    default:
      return prevState;
  }
}
