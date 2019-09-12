import React from "react";
import "./App.css";

import profile from "./assets/willyan.jpeg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Trend from "react-trend";

var data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

function App() {
  return <img width="500" src={profile} />;
}

function AppYYY() {
  setInterval(() => {
    //alert("Ok!");
    data.push({
      name: "Page X",
      uv: 4000,
      pv: 2400,
      amt: 2400
    });
  }, 5000);
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}

function AppXXX() {
  let arr = [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0];

  setInterval(() => {
    //alert("Ok!");
    arr.push(5);
  }, 5000);
  return (
    <Trend
      smooth
      autoDraw
      autoDrawDuration={3000}
      autoDrawEasing="ease-out"
      data={arr}
      gradient={["#00c6ff", "#F0F", "#FF0"]}
      radius={10}
      strokeWidth={2}
      strokeLinecap={"butt"}
    />
  );
}

export default App;
