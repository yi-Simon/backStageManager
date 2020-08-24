"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqGetSubject = reqGetSubject;
exports.reqGetSecSubject = reqGetSecSubject;
exports.reqAddSubject = reqAddSubject;
exports.reqUpdateSubject = reqUpdateSubject;
exports.reqRemoveSubject = reqRemoveSubject;
exports.reqAllSubject = reqAllSubject;

var _request = _interopRequireDefault(require("@utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导入发送异步请求的request方法.项目中所有的异步请求都是调用request方法实现的
var BASE_URL = "/admin/edu/subject"; // 假设本地服务器接口还没写完.先使用mock
// const MOCK_URL = 'http://localhost:8888/admin/edu/subject'
// 获取一级课程分类

function reqGetSubject(page, limit) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/").concat(page, "/").concat(limit),
    method: "GET"
  });
} // 获取二级课程分类


function reqGetSecSubject(parentId) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/get/").concat(parentId),
    method: "GET"
  });
} // 新增课程分类


function reqAddSubject(title, parentId) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/save"),
    method: "POST",
    data: {
      title: title,
      parentId: parentId
    }
  });
} // 更新课程分类


function reqUpdateSubject(id, title) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/update"),
    method: "PUT",
    data: {
      id: id,
      title: title
    }
  });
}

function reqRemoveSubject(id) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/remove/").concat(id),
    method: "DELETE"
  });
}

function reqAllSubject() {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL),
    method: "GET"
  });
}