import { Card, Checkbox, Input, Radio, Select, Skeleton } from "antd";
import {
  FaCamera,
  FaCheck,
  FaCheckCircle,
  FaPlus,
  FaRegCheckCircle,
} from "react-icons/fa";
import React, { Component } from "react";

import { BiChevronDown } from "react-icons/bi";
import { FiCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const content = [
  {
    id: 1,
    title: "Your Details",
  },
  {
    id: 2,
    title: "Name & Category",
  },
  {
    id: 3,
    title: "Features",
  },
  {
    id: 4,
    title: "Create Your Store",
  },
  {
    id: 5,
    title: "Your epop plan",
  },
  {
    id: 6,
    title: "Your epop dashboard",
  },
];

const { Option } = Select;
class Features extends Component {
  state = { bar_count: content.length, page: 3, value3: "apple" };
  render() {
    const { value3 } = this.state;
    return (
      <>
        <div className="left">
          <Skeleton.Image />
          {content.map((titles) =>
            titles.id < this.state.bar_count ? (
              titles.id < this.state.page ? (
                <>
                  <div className="sidebar-titles">
                    {titles.title}{" "}
                    <FaCheckCircle className="check-circle ml-15" />
                  </div>
                  <div className="hori-line"></div>
                </>
              ) : titles.id === this.state.page ? (
                <>
                  <div className="sidebar-titles">
                    {titles.title} <FiCircle className="fi-circle current" />
                  </div>
                  <div className="hori-line"></div>
                </>
              ) : (
                <>
                  <div className="sidebar-titles">
                    {titles.title}
                    <FiCircle className="fi-circle" />
                  </div>
                  <div className="hori-line"></div>
                </>
              )
            ) : (
              <div className="sidebar-titles">
                {titles.title}
                <FiCircle className="fi-circle" />
              </div>
            )
          )}
        </div>
        <div className="right">
          <div className="right-content">
            <Card className="main-card">
              <div className="card-title">
                Let us help you get the most out of ePoP?
              </div>
              <div className="card-description">
                Select from our key features below. You can make changes at any
                time from your ePoP Dashboard{" "}
              </div>
              <Radio.Group className="mt-30">
                <Radio.Button value="a" style={{ fontSize: "11px" }}>
                  <span className="bold">Digital Receipts</span>-provide more
                  valuable receipts to your customer
                  <span className="features-align">
                    <FaCheck className="features-check" />
                  </span>
                </Radio.Button>
                <Radio.Button value="b" style={{ fontSize: "10px" }}>
                  <span className="radio-optn">
                    <span className="bold">Offers</span>-send promotions &
                    cashback offers to new and existing customers
                  </span>
                  <span className="features-align ml-320">
                    <FaCheck className="features-check" />
                  </span>
                </Radio.Button>
                <Radio.Button value="c" style={{ fontSize: "10px" }}>
                  <span className="bold">Advertising</span>-increase brand
                  awareness and reach new customers
                  <span className="features-align">
                    <FaCheck className="features-check" />
                  </span>
                </Radio.Button>
                <Radio.Button value="d" style={{ fontSize: "10px" }}>
                  <span className="bold">Other</span>-reduce costs,provide safe
                  contactless experience
                  <span className="features-align">
                    <FaCheck className="features-check" />
                  </span>
                </Radio.Button>
              </Radio.Group>
              <span className="card-description select-one">
                *Please select atleast one
              </span>
              <div className="feature-cont">
                <span className="continue-btn category-continue feature-continue">
                  Continue
                </span>
              </div>
              <Link to="/">Back</Link>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Features;
