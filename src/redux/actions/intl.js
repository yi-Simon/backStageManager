import { INTL_LANGUAGE } from "../constants/intl";

export function intl(data) {
  return {
    type: INTL_LANGUAGE,
    data,
  };
}
