"use client";

import { CHART_FILTER } from "@/const/stock-option-const";
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
  const [chartData, setChartData] = useState(null);
  const [filter, setFilter] = useState("1M");

  function convertUnixTimestampToDate(date) {
    return new Date(date * 1000).toLocaleDateString();
  }

  const formData = (data) => {
    return;
    data.c.map((item, index) => {
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
          {Object.values(CHART_FILTER).map((item) => {
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
    </div>
  );
}
