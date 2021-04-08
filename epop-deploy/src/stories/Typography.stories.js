import React, { Component } from "react";

export default {
  title: "TypoGraphy",
};

export const BGColors = () => (
  <>
    <div className="bg-grey">BG-GREY-1</div>
    <div className="bg-grey2">BG-GREY-2</div>
    <div className="bg-grey3">BG-GREY-3</div>
    <div className="bg-primary">BG-PRIMARY</div>
    <div className="bg-primary2">BG-PRIMARY2</div>
    <div className="bg-pale-cyan">BG-PALE-CYAN</div>
  </>
);

export const TextSizesAndColors = () => (
  <>
    <div className="card-title">font-weight-700</div>
    <div className="card-title">font-size-14</div>
    <div className="card-title">font-family-Source-Sans</div>
    <div className="card-description">font-size-12</div>
    <div className="card-description">font-weight-400</div>
    <div className="input-text-style">font-family-QuickSand</div>
    <div className="login-title ml-0">font-size-25</div>
    <div className="login-title ml-0">font-weight-600</div>
    <div className="login-title ml-0">font-color-primary</div>
  </>
);
