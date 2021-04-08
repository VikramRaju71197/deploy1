import { Button, Card, Input, Select, Table } from "antd";
import { FiArrowRight, FiCircle } from "react-icons/fi";
import React, { Component } from "react";

import { BiChevronDown } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";

const { Option } = Select;

const { Column, ColumnGroup } = Table;

export default {
  title: "Cards",
};

export const MainCard = () => (
  <Card className="main-card">
    <div>Main card</div>
  </Card>
);

export const PhotoCard = () => (
  <Card className="photo-card">
    <div>Photo Card</div>
  </Card>
);

export const ContactDetails = () => (
  <Card className="main-card">
    <Card className="contact-details">
      <Button type="primary" className="small-btn contact-edit">
        Edit
      </Button>
      <div>
        <span className="input-text-style contact-title-name">Store Name</span>
        <span className="contact-name-align"> Coffee 66</span>
      </div>
      <div>
        <span className="input-text-style">Address Line 1</span>
        <span className="contact-val-align">200 Time Square</span>
      </div>
      <div>
        <span className="input-text-style">Address Line 2</span>
        <span className="contact-val-align">Unit 105</span>
      </div>
      <div>
        <span className="input-text-style contact-city-name">City</span>
        <span className="contact-city-align">200 Time Square</span>
      </div>
      <div>
        <span className="input-text-style contact-state-name">State</span>
        <span className="contact-city-align">NY</span>
      </div>
      <div>
        <span className="input-text-style contact-email">Email</span>
        <span className="contact-city-align">john@coffee66.com</span>
      </div>
      <div>
        <span className="input-text-style phn-no">Phone Number</span>
        <span className="contact-city-align">646-625-6460</span>
      </div>
    </Card>
  </Card>
);

export const AddNewStore = () => (
  <Card className="main-card">
    <span className="input-text-style ml-18">Store Name</span>
    <Input className=" storybook-email "></Input>
    <span className="input-text-style">Address Line 1</span>
    <Input className=" storybook-email ml-3"></Input>
    <span className="input-text-style">Address Line 2</span>
    <Input className=" storybook-email"></Input>
    <span className="input-text-style ml-70">City</span>
    <Input className=" storybook-email"></Input>
    <span className="input-text-style ml-60">State</span>
    <Select
      placeholder="State"
      suffixIcon={<BiChevronDown />}
      dropdownStyle={{
        height: "auto",
        minHeight: "inherit",
        maxHeight: "300px",
      }}
      className="storybook-select small-select "
      style={{ height: "auto" }}
    >
      <Option value="NY">NY</Option>
      <Option value="Texas">Texas</Option>
    </Select>
    <span className="input-text-style ml-18">Zip</span>
    <Input className=" storybook-email w-106"></Input>
    <span className="input-text-style ml-60">Email</span>
    <Input className=" storybook-email "></Input>
    <span className="input-text-style">Phone Number</span>
    <Input className=" storybook-email w-296"></Input>
    <div className="mt-30">
      <Button type="primary" className="small-btn">
        Cancel
      </Button>
      <Button type="primary" className="small-btn ml-250">
        Save
      </Button>
    </div>
  </Card>
);

export const DateCard = () => (
  <Card>
    <Card className="date-card">
      <span className="font-size-34 date-align">29</span>
      <span className="font-size-22 day-align">Friday</span>
      <span className="font-size-16 month-align">January 2021</span>
      <span className="date-card-line"></span>
      <span className="receipt-no font-size-22 ">4</span>
      <span className="font-size-16 font-color-primary receipt-text">
        ePOP Receipts
      </span>
      <span className="date-card-line-2"></span>
      <span className="customer-no font-size-22">4</span>
      <span className="font-size-16 font-color-primary customer-text">
        New Customers
      </span>
      <FiArrowRight className="fi-arr-right date-card-arrow" />
    </Card>
  </Card>
);

export const ImpactCard = () => (
  <Card className="main-card">
    <Card className="impact-card">
      <div className="font-size-22 text-align-c">Digital Receipts Created</div>
      <span className="number-display ml-18">
        <span className="flip">
          <span className="digital" data-number="0"></span>
        </span>
        <span className="flip">
          <span className="digital" data-number="0"></span>
        </span>
        <span className="flip">
          <span className="digital" data-number="0"></span>
        </span>

        <span className="flip ">
          <span className="digital-green" data-number="2"></span>
        </span>
        <span className="flip">
          <span className="digital-green" data-number="2"></span>
        </span>
        <span className="flip ">
          <span className="digital-green" data-number="2"></span>
        </span>
      </span>
      <div className="font-size-18 mt-15 text-align-c">
        Which is equivalent to <strong>500g CO2</strong>
      </div>
      <Card className="plant-card ml-25">
        <div className="text-align-c text-color-white font-weight-600">
          AND THANKS TO YOU
        </div>
        <div className="text-align-c text-color-white font-weight-600 font-size-22">
          1000
        </div>
        <div className="text-align-c text-color-white font-weight-600">
          Trees Planted and counting...
        </div>
      </Card>
      <div className="font-size-10">
        * an average-sized paper receipt emits around 2.5g of carbon during its
        lifetime - from production, to transport, to landfill.
      </div>
    </Card>
  </Card>
);

const data = [
  {
    key: "1",
    Date: "Today 13:22:03",
    epopId: "UKI-E32-SUN7",
    Amount: "30.05",
    Currency: "USD",
    Card: "*6622",
  },
  {
    key: "2",
    Date: "Today 13:22:03",
    epopId: "UKI-E32-SUN7",
    Amount: "30.05",
    Currency: "USD",
    Card: "*6622",
  },
];

export const TransactionCard = () => (
  <Card>
    <Table
      bordered
      dataSource={data}
      rowClassName={(data, index) => (index % 2 === 0 ? "row-even" : "row-odd")}
    >
      <Column
        title="Date & Time"
        className="text-color-white"
        dataIndex="Date"
        key="Date"
      ></Column>
      <Column
        title="Customer ePOP ID"
        dataIndex="epopId"
        key="epopId"
        className="text-color-white"
      ></Column>
      <Column
        title="Amount"
        dataIndex="Amount"
        key="Amount"
        className="text-color-white"
      ></Column>
      <Column
        title="Currency"
        dataIndex="Currency"
        key="Currency"
        className="text-color-white"
      ></Column>
      <Column
        title="Card Number"
        dataIndex="Card"
        key="Card"
        className="text-color-white"
      ></Column>
    </Table>
  </Card>
);

export const CircularDisplay = () => (
  <>
    <Card className="circular-card">
      <div className="text-align-c">
        <div className="text-color-white font-size-24">1</div>
        <div className="text-color-white">Complete your business details</div>
        <GrFormClose className="font-size-24" />
      </div>
    </Card>
  </>
);

export const CircularDisplay2 = () => (
  <>
    <Card className="circular-card-2">
      <div className="text-align-c">
        <div className="text-color-white font-size-24">1</div>
        <div className="text-color-white">Complete your business details</div>
        <GrFormClose className="font-size-24" />
      </div>
    </Card>
  </>
);
