import { GET_USERINFO, GET_USERMENU } from "./constants";

const initState = {
  name: "",
  avatar: "",
  permissionValueList: [],
  permissionList: [],
};

export default function user(preState = initState, action) {
  switch (action.type) {
    case GET_USERINFO:
      return {
        ...preState,
        ...action.data,
      };
    case GET_USERMENU:
      return {
        ...preState,
        ...action.data,
      };
    default:
      return preState;
  }
}
