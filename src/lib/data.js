import React from "react";
import {MdHome,  MdOutlineCurrencyExchange} from 'react-icons/md'
import { TbChartPieFilled } from "react-icons/tb";
import { RiChatSmileFill,  RiNetflixFill } from "react-icons/ri";
import { IoWallet } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import { RiEdit2Line } from "react-icons/ri";

export const links = [
    {
        name: "Home",
        to: "/",
        icon: React.createElement(MdHome)
    },
    {
        name: "statistics",
        to: "/coming-soon",
        icon: React.createElement(TbChartPieFilled)
    },
    {
        name: "message",
        to: "/coming-soon",
        icon: React.createElement( RiChatSmileFill)
    },
    {
        name: "finances",
        to: "/coming-soon",
        icon: React.createElement(IoWallet)
    },
    
];
export const chartBoxUser = {
    color: "#3137b2",
    bg:"#EDECF7",
    icon: "/userIcon.svg",
    title: "Visitors",
    number: "11.238",
    dataKey: "visitors",
    percentage: 45,
    chartData: [
      { name: "Sun", visitors: 400 },
      { name: "Mon", visitors: 400 },
      { name: "Tue", visitors: 500 },
      { name: "Wed", visitors: 700 },
      { name: "Thu", visitors: 700 },
      { name: "Fri", visitors: 500 },
      { name: "Sat", visitors: 450 },
    ],
};
export const chartBoxCustomer = {
    color: "#3137b2",
    bg:"#EDECF7",
    icon: "/userIcon.svg",
    title: "CUSTOMERS",
    number: "4,628",
    dataKey: "customers",
    percentage: 45,
    chartData: [
      { name: "Sun", customers: 700 },
      { name: "Mon", customers: 500 },
      { name: "Tue", customers: 400 },
      { name: "Wed", customers: 400 },
      { name: "Thu", customers: 500 },
      { name: "Fri", customers: 600 },
      { name: "Sat", customers: 650 },
    ],
  };
  export const chartBoxOrders = {
    color: "#FF0000",
    bg:"white",
    title: "ORDERS",
    number: "2,980",
    dataKey: "orders",
    percentage: 45,
    chartData: [
      { name: "Sun", orders: 400 },
      { name: "Mon", orders: 600 },
      { name: "Tue", orders: 700 },
      { name: "Wed", orders: 700 },
      { name: "Thu", orders: 600 },
      { name: "Fri", orders: 500 },
      { name: "Sat", orders: 650 },
    ],
  };
 export const cardInfo = {
    cardNumber: '1234567891011121',
    cardHolder: 'John Doe',
    expirationDate: '12/24',
};

export const transactionsData =[
  {
    id: 1,
    name: "Taxi",
    date: "01:21PM",
    amount: "9,20",
    img:"taxi.png"

  },
  {
    id: 2,
    name: "Shoppping",
    date: "11:15AM",
    amount: "3.256",
    img: "shopping.png"

  },
  {
    id: 3,
    name: "Netflix",
    date: "Jan 10, 2020",
    amount: "2.998",
    img: "netflix.png"

  },
]
  


