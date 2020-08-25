import React, { Component } from "react";
import Analysis from "./Analysis";
import Scales from "./Scales";
import Static from "./Static";

export default class Admin extends Component {
  render() {
    return (
      <div>
        <Analysis></Analysis>
        <Scales></Scales>
        <Static></Static>
      </div>
    );
  }
}
