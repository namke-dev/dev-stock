import React, { useEffect, useState } from "react";
import Cart from "./cart";
import OptionBar from "./dashboard/option-bar";
import SearchBar from "./dashboard/search-bar";
import StockOverview from "./dashboard/stock-overview";
import CompanyDetail from "./dashboard/company-detail";
import ChartCard from "./dashboard/chart-cart";
import TrendCard from "./dashboard/trend-card";
import { mockMarketTrendResponse } from "@/mock/mock-data";
import Tabs from "./tabs";
import { mockTimeSeriesDailyAdjust } from "@/mock/mock-time-series";
import ThemeSwitch from "./theme-switch";

export default function Dashboard() {
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [chartData, setChartData] = useState(null);

  const tabs = [
    { name: "Chart", content: <ChartCard chartData={chartData} /> },
    { name: "Trend", content: <TrendCard selectedTrend={selectedTrend} /> },
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
      grid-cols-1 md:grid-cols-3
      grid-rows-12
      auto-rows-fr
      gap-1 px-2 py-2
      font-quicksand text-gray-700 text-md"
      >
        {/* Option Bar */}
        <div
          className="
          col-span-1 md:col-span-3
          row-span-1
          flex flex-col justify-center items-center
          "
        >
          <Cart>
            <ThemeSwitch />
            <SearchBar />
          </Cart>
        </div>

        {/* trend table */}

        <div
          className="
          col-span-1 md:col-span-3
          row-span-3 md:row-span-5
          flex flex-col justify-center items-center
          "
        >
          <Cart>
            <OptionBar />
            <TrendCard selectedTrend={selectedTrend} />
          </Cart>
        </div>

        {/* DashBoard chart */}
        <div
          className="col-span-1 md:col-span-2
        row-span-5 md:row-span-9"
        >
          {/* <Cart>
            <ChartCard />
          </Cart> */}
          {/* <TrendCard selectedTrend={selectedTrend} /> */}
          <Cart>
            <Tabs tabs={tabs} />
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
