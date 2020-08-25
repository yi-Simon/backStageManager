import { INTL_LANGUAGE } from "../constants/intl";
const initIntl = window.navigator.language === "en" ? "en" : "zh";

export default function intlLanguage(prevState = initIntl, action) {
  switch (action.type) {
    case INTL_LANGUAGE:
      return action.data;
    default:
      return prevState;
  }
}
