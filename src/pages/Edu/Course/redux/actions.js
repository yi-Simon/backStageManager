import { GET_ALL_COURSE } from "./constants";
import { reqGetCourseList } from "@api/edu/course";

function getAllCouorseSync(data) {
  return {
    typr: GET_ALL_COURSE,
    data,
  };
}

export function getAllCourse() {
  return (dispatch) => {
    return reqGetCourseList().then((res) => {
      dispatch(getAllCouorseSync(res));
    });
  };
}
