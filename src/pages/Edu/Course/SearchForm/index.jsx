import React, { useState, useEffect } from "react";
import { Form, Input, Select, Cascader, Button } from "antd";
import { connect } from "react-redux";

import { reqAllSubject, reqGetSecSubject } from "@api/edu/subject";
import { reqGetAllTeacherList } from "@api/edu/teacher";
import { getAllCourse } from "../redux";
import "./index.less";

import { FormattedMessage, useIntl } from "react-intl";

const { Option } = Select;
connect(
  (state) => ({
    courseList: state.courseList,
  }),
  { getAllCourse }
)(SearchForm);

function SearchForm(props) {
  const [form] = Form.useForm();
  const [teachers, setTeacher] = useState([]);
  const [subjects, setSubject] = useState([]);
  const [options, setOption] = useState([]);

  useEffect(() => {
    async function fetchDate() {
      const [subject, teacher] = await Promise.all([
        reqAllSubject(),
        reqGetAllTeacherList(),
      ]);
      setSubject(subject);
      setTeacher(teacher);
      const optionList = subject.map((item) => {
        return {
          value: item._id,
          label: item.title,
          isLeaf: false,
        };
      });
      setOption(optionList);
    }
    fetchDate();
  }, []);

  // const [options, setOptions] = useState([
  //   {
  //     value: "zhejiang",
  //     label: "Zhejiang",
  //     isLeaf: false,
  //   },
  //   {
  //     value: "jiangsu",
  //     label: "Jiangsu",
  //     isLeaf: false,
  //   },
  // ]);

  const onChange = (value, selectedOptions) => {
    console.log("多级联动", value, selectedOptions);
  };

  const loadData = async (selectedOptions) => {
    console.log("触发loadData");
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    const res = await reqGetSecSubject(targetOption.value);
    // load options lazily

    targetOption.loading = false;
    if (res.items.length) {
      targetOption.children = res.items.map((item) => {
        return {
          value: item._id,
          label: item.title,
        };
      });
    } else {
      targetOption.isLeaf = true;
    }
    setOption([...options]);
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onFinish = () => {
    console.log(props);
  };

  const intl = useIntl();
  return (
    <Form layout="inline" form={form} onFinish={onFinish}>
      <Form.Item name="title" label={<FormattedMessage id="title" />}>
        <Input
          placeholder={intl.formatMessage({ id: "title" })}
          style={{ width: 250, marginRight: 20 }}
        ></Input>
      </Form.Item>
      <Form.Item name="teacherId" label={<FormattedMessage id="teacher" />}>
        <Select
          allowClear
          placeholder={intl.formatMessage({ id: "teacher" })}
          style={{ width: 250, marginRight: 20 }}
        >
          {teachers.map((item) => (
            <Option key={item._id} value={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item name="subject" label={<FormattedMessage id="subject" />}>
        <Cascader
          style={{ width: 250, marginRight: 20 }}
          options={options}
          loadData={loadData}
          onChange={onChange}
          // changeOnSelect
          placeholder={intl.formatMessage({ id: "subject" })}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ margin: "0 10px 0 30px" }}
        >
          查询
        </Button>
        <Button onClick={resetForm}>重置</Button>
      </Form.Item>
    </Form>
  );
}

export default SearchForm;
