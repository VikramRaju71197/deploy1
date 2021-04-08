import { Card, Checkbox, Input, Radio, Select, Skeleton } from "antd";
import { FaCamera, FaCheckCircle, FaPlus } from "react-icons/fa";
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

class Category extends Component {
  state = { bar_count: content.length, page: 2 };

  render() {
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
                What is the name and category of your business?
              </div>
              <div className="card-description mt-15">
                Use your personal name if appropriate so that customers know who
                they are paying
              </div>
              <Input placeholder="Business Name " className="mt-15"></Input>
              <div className="card-title mt-30">
                What type of business do you run ? <div className="mt-15"></div>
                <Select
                  placeholder="Category of your business"
                  suffixIcon={<BiChevronDown />}
                >
                  <Option value="India">India</Option>
                  <Option value="USA">USA</Option>
                </Select>
              </div>
              <div className="card-description">Please select one*</div>
              <div className="card-title mt-30">Logo (Optional)</div>
              <div className="card-description mt-15">
                To display your custom branding please upload your logo (ideally
                in square format). Upload images less than 10MB in size in png
                or jpeg format
              </div>
              <Card className="photo-card mt-15">
                <FaPlus className="photo-plus" />
                <FaCamera className="camera-icon" />
                <div className="photo-desc">Upload your logo</div>
              </Card>
              <span className="continue-btn category-continue">Continue</span>
              <Link to="/">Back</Link>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default Category;
