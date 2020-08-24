import { GET_ALL_COURSE } from "./constants";

const initCourse = {
  total: 0,
  items: [],
};

export default function courseList(prevState = initCourse, action) {
  switch (action.type) {
    case GET_ALL_COURSE:
      return { ...prevState, action };
    default:
      return prevState;
  }
}
