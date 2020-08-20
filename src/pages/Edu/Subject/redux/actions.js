import {
  reqGetSubject,
  reqGetSecSubject,
  reqUpdateSubject,
  reqRemoveSubject,
} from "@api/edu/subject";

import {
  GET_SUBJECT_LIST,
  GET_SEC_SUBJECT_LIST,
  GET_UPDATE_SUBJECT_LIST,
  GET_REMOVE_SUBJECT_LIST,
} from "./constants";
/**
 * 获取一级课程分类
 */
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

// 获取二级课程分类
const getSecSubjectListSync = (list) => ({
  type: GET_SEC_SUBJECT_LIST,
  data: list,
});

export const getSecSubjectList = (parentId) => {
  return (dispatch) => {
    return reqGetSecSubject(parentId).then((response) => {
      dispatch(getSecSubjectListSync(response));
      return response.total;
    });
  };
};
const getUpdateSubjectListSync = (list) => ({
  type: GET_UPDATE_SUBJECT_LIST,
  data: list,
});

export const getUpdateSubjectList = (id, title) => {
  return (dispatch) => {
    return reqUpdateSubject(id, title).then((response) => {
      dispatch(getUpdateSubjectListSync(response));
      return response.total;
    });
  };
};
const getRemoveSubjectListSync = (list) => ({
  type: GET_REMOVE_SUBJECT_LIST,
  data: list,
});

export const getRemoveSubjectList = (id) => {
  return (dispatch) => {
    return reqRemoveSubject(id).then((response) => {
      dispatch(getRemoveSubjectListSync(response));
      return response.total;
    });
  };
};
