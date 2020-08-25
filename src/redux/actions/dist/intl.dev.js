"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intl = intl;

var _intl = require("../constants/intl");

function intl(data) {
  return {
    type: _intl.INTL_LANGUAGE,
    data: data
  };
}