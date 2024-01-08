"use client";

import { CHART_CONFIG } from "@/const/stock-option-const";
import { mockHistorialData } from "@/mock/mock-data";
import React, { useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartFilter from "./chart-filter";

export default function Chart() {
  const [chartData, setChartData] = useState(mockHistorialData);
  const [filter, setFilter] = useState("1M");

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
    <div className="h-[20rem] md:h-full w-full flex flex-col">
      <div>
        <ul
          className=" flex flex-row flex-wrap 
          z-40 md:gap-2
          items-center 
          justify-start
          md:justify-end"
        >
          {Object.values(CHART_CONFIG).map((item) => {
            return (
              <li key={item}>
                <ChartFilter
                  text={item}
                  isActive={filter === item}
                  onClick={() => {
                    setFilter(item);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <ResponsiveContainer className="h-full w-full">
        <AreaChart
          data={formData(chartData)}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#colorUv)"
          />

          <Tooltip />
          <XAxis dataKey={"date"} />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
