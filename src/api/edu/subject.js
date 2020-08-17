// 获取一级课程分类列表

// GET
// http://47.103.203.152/admin/edu/subject/:page/:limit

// 获取所有二级课程分类数据

// GET
// http://47.103.203.152/admin/edu/subject/get/:parentId

import request from "@utils/request";

const BASE_URL = "/admin/edu/subject";

// 获取一级课程列表
export function reqGetSubject(page, limit) {
  return request({
    url: `${BASE_URL}/${page}/${limit}`,
    method: "GET",
  });
}
// 获取二级课程列表
export function reqSecSubject(parentId) {
  return request({
    url: `${BASE_URL}/get/${parentId}`,
    method: "GET",
  });
}
