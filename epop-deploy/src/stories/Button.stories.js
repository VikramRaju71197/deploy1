import "./../styles/base.css";
import "./../styles/media.css";
import "antd/dist/antd.css";

import React, { Component } from "react";

import { Button } from "antd";

export default {
  title: "Buttons",
};

export const PrimaryButton = () => <Button type="primary">Continue</Button>;

export const DisabledButton = () => <Button disabled>Continue</Button>;

export const SecondaryButton = () => <Button type="secondary">Log Out</Button>;

export const SmallButton = () => (
  <Button type="primary" className="small-btn">
    Edit
  </Button>
);
