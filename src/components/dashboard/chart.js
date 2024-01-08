"use client";

import { mockHistorialData } from "@/mock/mock-data";
import { Monoton } from "next/font/google";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Chart() {
  const [chartData, setChartData] = useState(mockHistorialData);
  const [filter, setFilter] = useState("1W");

  function convertUnixTimestampToDate(date) {
    return new Date(date * 1000).toLocaleDateString();
  }

  const formData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  return (
    <ResponsiveContainer className="">
      <AreaChart data={formData(chartData)}>
        <Area
          type="monotone"
          dataKey="value"
          stroke="#312e81"
          fillOpacity={1}
          strokeWidth={0.5}
        />
        <Tooltip />
        <XAxis dataKey={"date"} />
        <YAxis domain={["dataMin", "dataMax"]} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
