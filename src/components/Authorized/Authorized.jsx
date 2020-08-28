import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserInfo, getUserMenu } from "./redux";

@connect((state) => ({ user: state.user }), { getUserInfo, getUserMenu })
class Authorized extends Component {
  async componentDidMount() {
    const { getUserInfo, getUserMenu } = this.props;
    await Promise.all([getUserInfo(), getUserMenu()]);
  }
  render() {
    return this.props.render(this.props.user);
  }
}
export default Authorized;
