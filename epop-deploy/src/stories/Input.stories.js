import "./../styles/base.css";
import "./../styles/media.css";
import "antd/dist/antd.css";

import { Card, Checkbox, Input, Radio, Select } from "antd";
import React, { Component } from "react";

import American from "../usaflag.png";
import { BiChevronDown } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import Indian from "../indianflag.png";

const { Option } = Select;

export default {
  title: "Inputs",
};

export const Email = () => (
  <Card>
    <Input
      className="email storybook-email"
      placeholder="Email address"
    ></Input>
  </Card>
);

export const GenInput = () => (
  <Card>
    <span className="input-text-style">Store Name</span>
    <Input className=" storybook-email"></Input>
  </Card>
);

export const CreatePassword = () => (
  <Card>
    <Input.Password className="storybook-email" placeholder="Create Password" />
  </Card>
);

export const ConfirmPassword = () => (
  <Card>
    <Input.Password
      className="storybook-email"
      placeholder="Confirm Password"
    />
  </Card>
);

export const SelectDrop = () => (
  <Card>
    <Select
      placeholder="Country"
      suffixIcon={<BiChevronDown />}
      dropdownStyle={{
        height: "auto",
        minHeight: "inherit",
        maxHeight: "300px",
      }}
      className="storybook-select"
      style={{ height: "auto" }}
    >
      <Option value="India">
        <img src={Indian} className="flag" /> India
      </Option>
      <Option value="USA">
        <img src={American} className="flag" /> United States of America
      </Option>
    </Select>
  </Card>
);

export const CheckBox = () => (
  <Checkbox suffixIcon={BiChevronDown} className="checkbox">
    {" "}
    CheckBox
  </Checkbox>
);

export const RadioButton = () => (
  <Radio.Group>
    <Radio.Button value="a" style={{ fontSize: "11px" }}>
      <span className="bold">Digital Receipts</span>-provide more valuable
      receipts to your customer
      <span className="features-align">
        <FaCheck className="features-check" />
      </span>
    </Radio.Button>
  </Radio.Group>
);

export const SelectSmall = () => (
  <Card>
    <Select
      placeholder="State"
      suffixIcon={<BiChevronDown />}
      dropdownStyle={{
        height: "auto",
        minHeight: "inherit",
        maxHeight: "300px",
      }}
      className="storybook-select small-select"
      style={{ height: "auto" }}
    >
      <Option value="NY">NY</Option>
      <Option value="Texas">Texas</Option>
    </Select>
  </Card>
);
