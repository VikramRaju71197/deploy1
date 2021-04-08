import { FaCamera, FaCheckCircle, FaPlus } from "react-icons/fa";
import { FiArrowRight, FiCircle } from "react-icons/fi";
import React, { Component } from "react";

import { BiChevronDown } from "react-icons/bi";
import { CgArrowRightR } from "react-icons/cg";
import { CgChevronRightO } from "react-icons/cg";
import { GiCircle } from "react-icons/gi";
import { MdExitToApp } from "react-icons/md";

export default {
  title: "Icons",
};

export const Icons = () => (
  <>
    <div className="display-icons">
      <BiChevronDown />
      <FaCheckCircle />
      <FaCheckCircle className="white-check" />
      <FiCircle className="fi-circle current" />
      <FiCircle className="fi-circle " />
      <GiCircle className="pos-circle" />
      <CgChevronRightO />
      <FaPlus />
      <FaCamera />
      <MdExitToApp />
      <FiArrowRight className="fi-arr-right" />
      <span className="number-display">
        <span className="flip">
          <span className="digital" data-number="0"></span>
        </span>
      </span>
      <span className="number-display">
        <span className="flip ">
          <span className="digital-green" data-number="2"></span>
        </span>
      </span>
    </div>
  </>
);
