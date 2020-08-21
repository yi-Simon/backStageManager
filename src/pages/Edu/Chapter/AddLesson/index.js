import React, { Component } from "react";
import { Card, Form, Input, Button, Switch, message } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import MyUpload from "@comps/MyUpload";
import { reqGetSaveLesson } from "@api/edu/lesson";

//表单布局属性
const layout = {
  // antd把一个宽度分为24份
  // 表单文字描述部分
  labelCol: {
    span: 3,
  },
  // 表单项部分
  wrapperCol: {
    span: 6,
  },
};
export default class AddLesson extends Component {
  onFinish = async (values) => {
    const { title, free, video } = values;
    console.log(this.props);
    const chapterId = this.props.location.state._id;
    await reqGetSaveLesson({ chapterId, title, free, video });
    message.success(`添加${title}成功`);
    this.props.history.push("/edu/chapter/list");
  };
  render() {
    return (
      <Card
        title={
          <>
            <Link to="/edu/chapter/list">
              <ArrowLeftOutlined />
            </Link>
            <span style={{ marginLeft: 10 }}>新增课程</span>
          </>
        }
      >
        <Form {...layout} name="lesson" onFinish={this.onFinish}>
          <Form.Item
            // 表单项的提示文字
            label="课时名称"
            // 表单上传数据的键
            name="title"
            // 配置表单校验

            rules={[
              {
                required: true,
                message: "课时名称",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="是否免费"
            name="free"
            valuePropName="checked"
            rules={[{ required: false }]}
          >
            <Switch
              defaultChecked
              checkedChildren="开启"
              unCheckedChildren="关闭"
            />
            {/* 注意: Option不是直接从antd中导出的.而是从Select组件上获取到的 */}
            {/* 一级菜单是写死的 */}
          </Form.Item>
          <Form.Item
            label="选择视频"
            name="video"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <MyUpload></MyUpload>
          </Form.Item>

          <Form.Item>
            {/* htmlType的值是submit,表示这个按钮是一个提交按钮 */}
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}
