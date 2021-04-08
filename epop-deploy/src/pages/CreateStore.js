import { Card, Checkbox, Input, Radio, Select, Skeleton } from "antd";
import {
  FaCamera,
  FaCheck,
  FaCheckCircle,
  FaPlus,
  FaRegCircle,
} from "react-icons/fa";
import React, { Component } from "react";

import { BiChevronDown } from "react-icons/bi";
import { FiCircle } from "react-icons/fi";
import { GiCircle } from "react-icons/gi";
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

class CreateStore extends Component {
  state = { bar_count: content.length, page: 4 };
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
                Create your store by connecting your POS system
              </div>
              <div className="card-description mt-15">
                Let's get you connected to ePOP
              </div>
              <div className="mt-30">
                <GiCircle className="pos-circle" />
                <GiCircle className="pos-circle" />
                <GiCircle className="pos-circle" />
              </div>
              <div className="terms-cond">
                I agree to ePOP AI connecting to my existing POS account to
                import all available information and future transactions. View{" "}
                <span className="terms-color">Terms and conditions</span>
              </div>
              <span className="continue-btn continue-active continue-create">
                Continue
              </span>
              <Link to="/">Back</Link>
            </Card>
          </div>
        </div>
      </>
    );
  }
}

export default CreateStore;
