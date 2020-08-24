import React, { Component } from "react";
import { Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { reqGetuploadtoken } from "@api/edu/lesson";
import { nanoid } from "nanoid";
import * as qiniu from "qiniu-js";

export default class MyUpload extends Component {
  constructor() {
    super();
    this.state = {
      isShowUpload: true,
    };
    const jsonStr = localStorage.getItem("UPLOAD_TOKEN");
    if (jsonStr) {
      this.tokenObj = JSON.parse(jsonStr);
    } else {
      this.tokenObj = {};
    }
  }

  handleBeforeUpload = (file, fileList) => {
    const MAX_SIZE = 20 * 1024 * 1024;

    return new Promise(async (resolve, reject) => {
      if (file.size > MAX_SIZE) {
        return reject();
      }
      if (this.tokenObj.expires && this.tokenObj.expires > Date.now()) {
        return resolve();
      }
      console.log("开始发请求");
      const res = await reqGetuploadtoken();
      console.log(res);

      res.expires = Date.now() + res.expires * 1000 - 2 * 60 * 1000;

      this.tokenObj = res;
      localStorage.setItem("UPLOAD_TOKEN", JSON.stringify(res));
      resolve();
    });
  };
  handlecustomRequest = ({ file, onProgress, onError, onSuccess }) => {
    const observer = {
      //上传过程中触发的回调函数
      next(res) {
        const percent = res.total.percent;
        onProgress({ percent });
      },
      //上传失败触发的回调函数
      error(err) {
        onError(err);
      },
      // 上传成功触发的回调函数
      complete: (res) => {
        this.setState({ isShowUpload: false });
        console.log("上传完成");
        onSuccess(res);

        this.props.onChange("http://qfekzkjt3.hn-bkt.clouddn.com/" + res.key);
      },
    };
    const key = nanoid(10);
    const token = this.tokenObj.uploadToken;
    const putExtra = {
      mimeType: "video/*",
    };
    const config = {
      region: qiniu.region.z2,
    };
    const observable = qiniu.upload(file, key, token, putExtra, config);
    this.subscription = observable.subscribe(observer);
  };
  componentWillUnmount() {
    // 上传取消
    this.subscription && this.subscription.unsubscribe();
  }
  handleRemove = () => {
    this.props.onChange("");
    this.setState({ isShowUpload: true });
  };
  render() {
    return (
      <>
        <Upload
          beforeUpload={this.handleBeforeUpload}
          customRequest={this.handlecustomRequest}
          onRemove={this.handleRemove}
          accept="video/*"
        >
          {this.state.isShowUpload && (
            <Button>
              <UploadOutlined /> 上传视频
            </Button>
          )}
        </Upload>
      </>
    );
  }
}
