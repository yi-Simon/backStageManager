import request from "@utils/request";

const BASE_URL = "oauth";

export function reqGetVerifyCode(mobile) {
  return request({
    url: `${BASE_URL}/sign_in/digits`,
    method: "POST",
    data: {
      mobile,
    },
  });
}

export function reqMobileLogin(mobile, code) {
  return request({
    url: `${BASE_URL}/mobile`,
    method: "POST",
    data: {
      mobile,
      code,
    },
  });
}
