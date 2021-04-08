import { Card, Checkbox, Input, Select, Skeleton } from "antd";
import React, { Component } from "react";

import American from "../usaflag.png";
import { BiChevronDown } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import Indian from "../indianflag.png";
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

class AccountSetup extends Component {
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
            <Card className="main-card">
              <div className="card-title">Let's get your account set up</div>
              <div className="card-description">
                SignUp to ePop and start benefitting from these today:
              </div>
              <Skeleton.Image />
              <Skeleton.Image />
              <Skeleton.Image />
              <Skeleton.Image />
              <Input className="email" placeholder="User Name"></Input>
              <Input className="email" placeholder="Email address"></Input>
              <Input.Password placeholder="Enter Password" />
              <Select
                placeholder="Country"
                suffixIcon={<BiChevronDown />}
                dropdownStyle={{
                  height: "auto",
                  minHeight: "inherit",
                  maxHeight: "300px",
                }}
                style={{ height: "auto" }}
              >
                <Option value="India">
                  <img src={Indian} className="flag" /> India
                </Option>
                <Option value="USA">
                  <img src={American} className="flag" /> United States of
                  America
                </Option>
              </Select>
              <div className="sign-in-now">
                Already have an account?{" "}
                <span className="terms-color on-click-sign-in">
                  Sign In Now
                </span>
                <span className="continue-btn continue-active">Continue</span>
              </div>
              <Link to="/">Back</Link>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default AccountSetup;
