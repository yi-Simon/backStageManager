import React, { Component } from "react";

import { Row, Col, Statistic, Progress } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import Card from "@comps/Card";

import { AreaChart, ColumnChart } from "bizcharts";

import "./index.less";

const RowCol = {
  xs: { span: 24 },
  md: { span: 12 },
  lg: { span: 6 },
};

const data = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 13 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 5 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];

const columnsdata = [
  {
    type: "家具家电",
    sales: 38,
  },
  {
    type: "粮油副食",
    sales: 52,
  },
  {
    type: "生鲜水果",
    sales: 61,
  },
  {
    type: "美容洗护",
    sales: 145,
  },
  {
    type: "母婴用品",
    sales: 48,
  },
  {
    type: "进口食品",
    sales: 38,
  },
  {
    type: "食品饮料",
    sales: 38,
  },
  {
    type: "家庭清洁",
    sales: 38,
  },
];
export default class Analysis extends Component {
  render() {
    return (
      <div>
        <Row gutter={[16, 16]}>
          <Col {...RowCol}>
            <Card
              title={
                <Statistic title="销售总额" prefix="￥" value={"998, 998"} />
              }
              footer={"日销售额 ￥998"}
            >
              <span>
                周同比 12%
                <CaretUpOutlined style={{ color: "red", marginRight: 10 }} />
              </span>
              <span>
                日同比 10%
                <CaretDownOutlined style={{ color: "green" }} />
              </span>
            </Card>
          </Col>
          <Col {...RowCol}>
            <Card
              title={
                <Statistic title="销售总额" prefix="￥" value={"998, 998"} />
              }
              footer={"日销售额 ￥998"}
            >
              <AreaChart
                data={data}
                xField="year"
                yField="value"
                padding="0"
                xAxis={{ visible: false }}
                yAxis={{ visible: false }}
                smooth={true}
                color={["hotpink"]}
              ></AreaChart>
            </Card>
          </Col>
          <Col {...RowCol}>
            <Card
              title={
                <Statistic title="销售总额" prefix="￥" value={"998, 998"} />
              }
              footer={"日销售额 ￥998"}
            >
              <ColumnChart
                data={columnsdata}
                forceFit
                xField="type"
                yField="sales"
                padding="0"
                xAxis={{ visible: false }}
                yAxis={{ visible: false }}
                meta={{
                  type: { alias: "类别" },
                  sales: { alias: "销售额(万)" },
                }}
              ></ColumnChart>
            </Card>
          </Col>
          <Col {...RowCol}>
            <Card
              title={
                <Statistic title="销售总额" prefix="￥" value={"998, 998"} />
              }
              footer={"日销售额 ￥998"}
            >
              <Progress
                percent={80.9}
                strokeColor={{ from: "#108ee9", to: "#87d068" }}
                status="active"
              ></Progress>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
