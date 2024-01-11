import React, { useEffect, useState } from "react";
import Cart from "./cart";
import SearchBar from "./dashboard/search-bar";
import StockOverview from "./dashboard/stock-overview";
import CompanyDetail from "./dashboard/company-detail";
import ChartCard from "./dashboard/chart-cart";
import TrendCard from "./dashboard/trend-card";
import { mockMarketTrendResponse } from "@/mock/mock-data";
import Tabs from "./tabs";
import { mockTimeSeriesDailyAdjust } from "@/mock/mock-time-series";
import MultiLineChart from "./dashboard/multi-line-chart";

export default function Dashboard() {
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [chartData, setChartData] = useState(null);

  const chartTabs = [
    { name: "TIME SERIES", content: <ChartCard chartData={chartData} /> },
    {
      name: "INCOME STATEMENT",
      content: <MultiLineChart chartData={chartData} />,
    },
    { name: "BALANCE SHEET", content: <ChartCard chartData={chartData} /> },
    { name: "CASH FLOW", content: <ChartCard chartData={chartData} /> },
  ];

  const trendTabs = [
    { name: "GAINERS", content: <TrendCard selectedTrend={selectedTrend} /> },
    { name: "LOSERS", content: <TrendCard selectedTrend={selectedTrend} /> },
    {
      name: "MARKET INDEXES",
      content: <TrendCard selectedTrend={selectedTrend} />,
    },
    {
      name: "MOST ACTIVE",
      content: <TrendCard selectedTrend={selectedTrend} />,
    },
  ];

  useEffect(() => {
    setSelectedTrend(mockMarketTrendResponse.data.trends);
    setChartData(mockTimeSeriesDailyAdjust["Time Series (Daily)"]);
  }, []);

  return (
    <div className="flex justify-center items-center">
      {/* Dashboard container */}
      <div
        className="md:h-[70rem] h-[110rem]
      w-full
      grid 
      grid-cols-1 md:grid-cols-4
      grid-rows-12
      auto-rows-fr
      gap-1 px-2 py-2
      font-quicksand text-gray-700 text-md
      "
      >
        {/* trend table */}

        <div
          className="
          col-span-1 md:col-span-4
          row-span-3 md:row-span-5
          flex flex-col justify-center items-center
          "
        >
          <Cart>
            <Tabs tabs={trendTabs} />
          </Cart>
        </div>
        {/* Search Bar */}
        <div
          className="
          col-span-1 md:col-span-4
          row-span-1
          flex flex-col justify-center items-center
          "
        >
          <Cart>
            <SearchBar />
          </Cart>
        </div>

        {/* DashBoard chart */}
        <div
          className="col-span-1 md:col-span-3
        row-span-5 md:row-span-9"
        >
          <Cart>
            <Tabs tabs={chartTabs} />
          </Cart>
        </div>

        {/* Dashboard Company stock overview */}
        <div className="row-span-1 md:row-span-2">
          <Cart>
            <StockOverview />
          </Cart>
        </div>

        {/* Dashboard Company Infor */}
        <div className="row-span-4 md:row-span-7">
          <Cart>
            <CompanyDetail />
          </Cart>
        </div>
      </div>
    </div>
  );
}
