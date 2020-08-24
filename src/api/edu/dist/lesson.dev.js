"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reqGetLessonList = reqGetLessonList;
exports.reqGetuploadtoken = reqGetuploadtoken;
exports.reqGetSaveLesson = reqGetSaveLesson;
exports.reqBatchDelLesson = reqBatchDelLesson;

var _request = _interopRequireDefault(require("@utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = "/admin/edu/lesson"; // 获取一级分类

function reqGetLessonList(chapterId) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/get/").concat(chapterId),
    method: "GET"
  });
}

function reqGetuploadtoken() {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "/uploadtoken",
    method: "GET"
  });
}

function reqGetSaveLesson(_ref) {
  var chapterId = _ref.chapterId,
      title = _ref.title,
      free = _ref.free,
      video = _ref.video;
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/save"),
    method: "POST",
    data: {
      chapterId: chapterId,
      title: title,
      free: free,
      video: video
    }
  });
}

function reqBatchDelLesson(idList) {
  return (0, _request["default"])({
    // 注意: 如果url地址只写了路径, 会被项目中配置的proxy拦截,然后将本地服务器的主机名拼接上去.
    // 我们现在假设本地服务的接口还没有完成.要使用mock服务器.应该将mock服务的主机名直接写在url地址里面.这样proxy就不会拦截了
    url: "".concat(BASE_URL, "/batchRemove"),
    method: "DELETE",
    data: idList
  });
}