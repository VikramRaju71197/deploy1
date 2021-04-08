import { Card, Checkbox, Input, Radio, Select, Skeleton } from "antd";
import {
  FaCamera,
  FaCheck,
  FaCheckCircle,
  FaPlus,
  FaRegCircle,
} from "react-icons/fa";
import React, { Component } from "react";

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

const plan1 = [
  {
    desc: "First 30 digital receipts included",
  },
  {
    desc: "Enhance contactless experience",
  },
  {
    desc: "Drive sales through digital engagement",
  },
  {
    desc: "Share your sustainability story",
  },
  {
    desc: "ePOP merchant partner status",
  },
];

const plan2 = [
  {
    desc: "First 100 digital receipts included",
  },
  {
    desc: "2 promotional offers",
  },
  {
    desc: "Data Analytics & Insights",
  },
  {
    desc: "Enhanced contactless Experience",
  },
  {
    desc: "Drive sales via digital engagement",
  },
  {
    desc: "Share your sustainability story",
  },
  {
    desc: "ePOP merchant partner status",
  },
];

const plan3 = [
  {
    desc: "First 100 digital receipts included",
  },
  {
    desc: "4 promotional offers",
  },
  {
    desc: "2 Banner advertisements",
  },
  {
    desc: "Data Analytics & Insights",
  },
  {
    desc: "Enhanced contactless Experience",
  },
  {
    desc: "Drive sales via digital engagement",
  },
  {
    desc: "Share your sustainability story",
  },
  {
    desc: "ePOP merchant partner status",
  },
];

class EpopPlan extends Component {
  state = { bar_count: content.length, page: 5 };
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
            <Card className="main-card epop-card">
              <div className="login-title">
                All these plans are free for 30 days
              </div>
              <div className="card-title mt-15">
                Choose your Membership plan
              </div>
              <div className="card-description">
                Choose which plan suits you best.You are not locked into any one
                plan and can change this at anytime on{" "}
                <strong>your ePop-Dashboard</strong>{" "}
              </div>
              <div className="mt-30 plan-div">
                <Card className="plan-card">
                  <div className="font-weight-600 plan-card-title">
                    STANDARD
                  </div>
                  <div className="mt-15">
                    <span className="dollar">$</span>
                    <div className="mt-15">
                      <span className="price">10</span>
                      <span className="month">/month</span>
                      <div className="plan-type-bg">
                        <div className="plan-type">MONTH TO MONTH</div>
                      </div>
                      <div className="font-weight-600">Monthly:</div>
                      {plan1.map((description) => (
                        <div className="list">
                          <FaCheck className="plan-check"></FaCheck>
                          <span className="font-size-10">
                            {description.desc}
                          </span>
                          <div className="plan-border"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bottom-content">CHOOSE STANDARD PLAN</div>
                </Card>
                <Card className="plan-card">
                  <div className="font-weight-600 plan-card-title">PREMIUM</div>
                  <div className="mt-15">
                    <span className="dollar">$</span>
                    <div className="mt-15">
                      <span className="price">20</span>
                      <span className="month">/month</span>
                      <div className="plan-type-bg">
                        <div className="plan-type">
                          3 MONTHS FREE WHEN YOU SIGN FOR 12
                        </div>
                      </div>
                      <div className="font-weight-600">Monthly:</div>
                      {plan2.map((description) => (
                        <div className="list">
                          <FaCheck className="plan-check"></FaCheck>
                          <span className="font-size-10">
                            {description.desc}
                          </span>
                          <div className="plan-border"></div>
                        </div>
                      ))}
                      <div className="bottom-content">
                        PREMIUM PLAN SUITS ME BEST
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="plan-card">
                  <div className="font-weight-600 plan-card-title">ELITE</div>
                  <div className="mt-15">
                    <span className="dollar">$</span>
                    <div className="mt-15">
                      <span className="price">30</span>
                      <span className="month">/month</span>
                      <div className="plan-type-bg">
                        <div className="plan-type">
                          3 MONTHS FREE WHEN YOU SIGN FOR 12
                        </div>
                      </div>
                      <div className="font-weight-600">Monthly:</div>
                      {plan3.map((description) => (
                        <div className="list">
                          <FaCheck className="plan-check"></FaCheck>
                          <span className="font-size-10">
                            {description.desc}
                          </span>
                          <div className="plan-border"></div>
                        </div>
                      ))}
                      <div className="bottom-content">
                        CHOOSE ENTERPRISE PLAN
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="mt-30">
                <span className="continue-btn continue-active plan-finish">
                  Finish
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

export default EpopPlan;
