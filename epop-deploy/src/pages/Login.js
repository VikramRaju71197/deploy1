import { Card, Checkbox, Form, Input, Select, Skeleton } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import React, { Component } from "react";

import { BiChevronDown } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const { Option } = Select;

const content = [
  {
    desc: "One simple integration for instant digital receipts",
  },
  {
    desc: "Engage with customers and grow your bussiness",
  },
  {
    desc: "Reduces cost and waste",
  },
];

class Login extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="left">
          <Skeleton.Image />
          <div className="login-head">Welcome to ePop</div>
          <div className="login-desc">Your Digital Partner</div>
          <div className="login-left-content">
            {content.map((descr) => (
              <div>
                <FaCheckCircle className="check-circle"></FaCheckCircle>
                <span className="login-left-content-desc">{descr.desc}</span>
                <div className="space"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <div className="login-title">Start your 30 day free trial</div>
            <Card className="main-card">
              <div className="card-title">Let's get your account setup</div>
              <div className="card-description">
                SignUp to ePop and start benefitting from these today:
              </div>
              <Skeleton.Image />
              <Skeleton.Image />
              <Skeleton.Image />
              <Skeleton.Image />
              <Form>
                <Form.Item>
                  <Input className="email" placeholder="Email address"></Input>
                </Form.Item>
                <Form.Item>
                  <Input.Password placeholder="Create Password" />
                </Form.Item>
                <Form.Item>
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item>
                  <Select placeholder="Country" suffixIcon={<BiChevronDown />}>
                    <Option value="India">India</Option>
                    <Option value="USA">USA</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <div className="terms-div">
                    I agree to ePop's{" "}
                    <span className="terms-color">Terms of Service</span> and{" "}
                    <span className="terms-color">Privacy policy</span>
                    <Checkbox className="checkbox"></Checkbox>
                    <div className="sign-in-now">
                      Already have an account?{" "}
                      <span className="terms-color on-click-sign-in">
                        Sign In Now
                      </span>
                      <span className="continue-btn">Continue</span>
                    </div>
                  </div>
                </Form.Item>
              </Form>
              <Link to="/">Back</Link>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
