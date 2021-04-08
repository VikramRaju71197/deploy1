import React, { Component } from "react";

import AccountSetup from "./../pages/AccountSetup";
import Category from "./../pages/Category";
import CreateStore from "./../pages/CreateStore";
import EpopPlan from "./../pages/EpopPlan";
import Features from "./../pages/Features";
import { Link } from "react-router-dom";
import Login from "./../pages/Login";

class Body extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/features">Features</Link>
        </div>
        <div>
          <Link to="/createstore">CreateStore</Link>
        </div>
        <div>
          <Link to="/epopplan">EpopPlan</Link>
        </div>
        <div>
          <Link to="/category">Category</Link>
        </div>
        <div>
          <Link to="/accountsetup">AccountSetup</Link>
        </div>
      </>
    );
  }
}

export default Body;
