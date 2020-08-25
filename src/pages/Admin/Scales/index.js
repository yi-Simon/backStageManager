import React, { Component } from "react";

import { Card, Button, DatePicker } from "antd";
import moment from "moment";
const { RangePicker } = DatePicker;

export default class Scales extends Component {
  state = {
    noTitleKey: "scales",
    dateFlag: "day",
    rangeTime: [moment(), moment()],
  };
  onTabChange = (key) => {
    this.setState({
      noTitleKey: key,
    });
  };
  handleClick = (dateFlag) => () => {
    let rangeTime;
    switch (dateFlag) {
      case "day":
        rangeTime = [moment(), moment()];
        break;
      case "week":
        rangeTime = [moment(), moment().add(7, "d")];
        break;
      case "month":
        rangeTime = [moment(), moment().add(1, "M")];
        break;
      case "year":
        rangeTime = [moment(), moment().add(1, "y")];
        break;
    }
    this.setState({ dateFlag, rangeTime });
  };
  render() {
    const tabListNoTitle = [
      {
        key: "scales",
        tab: "销售额",
      },
      {
        key: "visits",
        tab: "访问量",
      },
    ];
    const { dateFlag } = this.state;
    const extra = (
      <>
        <Button
          type={dateFlag === "day" ? "link" : "text"}
          onClick={this.handleClick("day")}
        >
          今日
        </Button>
        <Button
          type={dateFlag === "week" ? "link" : "text"}
          onClick={this.handleClick("week")}
        >
          本周
        </Button>
        <Button
          type={dateFlag === "month" ? "link" : "text"}
          onClick={this.handleClick("month")}
        >
          本月
        </Button>
        <Button
          type={dateFlag === "year" ? "link" : "text"}
          onClick={this.handleClick("year")}
        >
          本年
        </Button>

        <RangePicker value={this.state.rangeTime} />
      </>
    );
    const contentListNoTitle = {
      scales: <p>scales content</p>,
      visits: <p>visits content</p>,
    };
    return (
      <div>
        <Card
          style={{
            width: "100%",
          }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={extra}
          onTabChange={(key) => {
            this.onTabChange(key);
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}{" "}
        </Card>{" "}
      </div>
    );
  }
}
