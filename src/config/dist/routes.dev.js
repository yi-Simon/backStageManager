"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRoutes = exports.constantRoutes = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Login = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("@pages/Login"));
  });
});

var NotFound = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("@pages/404"));
  });
});

var Oauth = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require("@pages/Login/component"));
  });
}); //#region

/* export const asyncRoutes = [
	{
		path: "/acl",
		component: "",
		name: "权限管理",
		icon: "lock",
		redirect: "/acl/user/list",
		hidden: false,
		children: [
			{
				path: "/user",
				fullpath: "/user/list",
				component: "User",
				name: "用户管理",
				icon: "",
				redirect: "noredirect",
				children: [
					{
						path: "/add",
						component: "AddOrUpdateUser",
						name: "添加",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
					{
						path: "/update/:id",
						component: "AddOrUpdateUser",
						name: "修改",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
					{
						path: "",
						component: "",
						name: "删除",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
					{
						path: "/assign/:id",
						component: "AssignUser",
						name: "分配角色",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
				],
			},
			{
				path: "/role",
				fullpath: "/role/list",
				component: "Role",
				name: "角色管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
				children: [
					{
						path: "/assign/:id",
						component: "AssignRole",
						name: "分配角色",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
					{
						path: "/add",
						component: "AddOrUpdateRole",
						name: "添加",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
					{
						path: "",
						component: "",
						name: "删除",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
					{
						path: "/update/:id",
						component: "AddOrUpdateRole",
						name: "修改",
						icon: "",
						redirect: "noredirect",
						hidden: true,
					},
				],
			},
			{
				path: "/menu/list",
				component: "Permission",
				name: "菜单管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
		],
	},
	{
		path: "/edu",
		component: "",
		name: "教育管理",
		icon: "read",
		redirect: "/edu/chapter/list",
		hidden: false,
		children: [
			{
				path: "/chapter",
				fullpath: "/chapter/list",
				component: "Chapter",
				name: "章节管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
			{
				path: "/comment",
				fullpath: "/comment/list",
				component: "Comment",
				name: "评论管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
			{
				path: "/course",
				fullpath: "/course/list",
				component: "Course",
				name: "课程管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
			{
				path: "/subject",
				fullpath: "/subject/list",
				component: "Subject",
				name: "课程分类管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
			{
				path: "/teacher",
				fullpath: "/teacher/list",
				component: "Teacher",
				name: "讲师管理",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
		],
	},
	{
		path: "/account",
		component: "",
		name: "个人管理",
		icon: "user",
		redirect: "/account/settings",
		hidden: false,
		children: [
			{
				path: "/settings",
				component: "Settings",
				name: "个人设置",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
			{
				path: "/list",
				component: "Center",
				name: "个人中心",
				icon: "",
				redirect: "noredirect",
				hidden: false,
			},
		],
	},
]; */
//#endregion
// 常量路由


var constantRoutes = [{
  path: "/login",
  component: Login,
  title: "登录"
}, {
  path: "/oauth",
  component: Oauth,
  title: "git授权组件"
}, {
  path: "*",
  component: NotFound
}];
/**
 * 登录后 默认路由
 */

exports.constantRoutes = constantRoutes;
var defaultRoutes = [// 首页
{
  path: "/",
  component: "Admin",
  icon: "home",
  name: "后台管理系统"
} // { path: "*", redirect: "/404", component: NotFound, hidden: true }
];
exports.defaultRoutes = defaultRoutes;