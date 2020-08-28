import { reqLogin, reqLogout } from "@api/acl/login";
import { LOGIN_SUCCESS, REMOVE_TOKEN, MOBILE_TOKEN } from "../constants/login";
import { reqMobileLogin } from "@api/acl/oauth";

/**
 * 登陆
 */
const loginSuccessSync = (user) => ({
  type: LOGIN_SUCCESS,
  data: user,
});

//账号登录
export const login = (username, password) => {
  return (dispatch) => {
    return reqLogin(username, password).then((response) => {
      dispatch(loginSuccessSync(response));
      // 返回token，外面才能接受
      return response.token;
    });
  };
};

//手机登录

const mobileLoginSuccessSync = (user) => ({
  type: MOBILE_TOKEN,
  data: user,
});
export const mobileLogin = (phone, verify) => {
  return (dispatch) => {
    return reqMobileLogin(phone, verify).then((response) => {
      dispatch(loginSuccessSync(response));
      // 返回token，外面才能接受
      return response.token;
    });
  };
};
/**
 * 删除token
 */
export const removeToken = () => ({
  type: REMOVE_TOKEN,
});

/**
 * 登出
 */
export const logout = () => {
  return (dispatch) => {
    return reqLogout().then(() => {
      dispatch(removeToken());
    });
  };
};
