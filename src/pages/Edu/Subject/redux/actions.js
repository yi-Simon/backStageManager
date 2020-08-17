import { GET_SUBJECT_LIST, GET_SecSUBJECT_LIST } from "./constants";
import { reqGetSubject, reqSecSubject } from "@api/edu/subject";

const getSubjectListSync = (list) => ({
  type: GET_SUBJECT_LIST,
  data: list,
});

export const getSubjectList = (page, limit) => {
  return (dispatch) => {
    return reqGetSubject(page, limit).then((response) => {
      dispatch(getSubjectListSync(response));
      return response.total;
    });
  };
};
const getSecSubjectListSync = (list) => ({
  type: GET_SecSUBJECT_LIST,
  data: list,
});

export const getSecSubjectList = (parentId) => {
  return (dispatch) => {
    return reqSecSubject(parentId).then((response) => {
      dispatch(getSecSubjectListSync(response));
      return response.total;
    });
  };
};
