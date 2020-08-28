import { GET_USERINFO, GET_USERMENU } from "./constants";

import { getInfo, getMenu } from "@api/acl/login";

function getUserInfoSync(data) {
  return { type: GET_USERINFO, data };
}

export const getUserInfo = () => {
  return (dispatch) => {
    return getInfo().then((res) => {
      dispatch(getUserInfoSync(res));
      return res;
    });
  };
};

function getUserMenuSync(data) {
  return { type: GET_USERMENU, data };
}

export const getUserMenu = () => {
  return (dispatch) => {
    return getMenu().then((res) => {
      dispatch(getUserMenuSync(res && res.permissionList));
      return res && res.permissionList;
    });
  };
};
