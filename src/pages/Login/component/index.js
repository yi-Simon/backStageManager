import React, { Component } from "react";
import { connect } from "react-redux";
import { mobileLogin } from "@redux/actions/login";

@connect(null, { mobileLogin })
class Oauth extends Component {
  componentDidMount() {
    const token = this.props.location.search.split("=")[1];
    this.props.mobileLogin({ token });
    localStorage.setItem("user_token", token);
    this.props.history.replace("/");
  }
  render() {
    return <div>权限验证。。。</div>;
  }
}
export default Oauth;
