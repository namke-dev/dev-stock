import React, { useContext, useEffect, useState } from "react";
import Cart from "./cart";
import SearchSymbolBar from "./dashboard/search-bar";
import StockOverview from "./dashboard/stock-overview";
import CompanyDetail from "./dashboard/company-detail";
import ChartCard from "./dashboard/chart-cart";
import TrendCard from "./dashboard/trend-card";
import {
  mockCompanyBalanceSheetResponse,
  mockCompanyIncomeStatementResponse,
  mockMarketTrendGainersResponse,
  mockMarketTrendLosersResponse,
  mockMarketTrendMarketIndexResponse,
  mockMarketTrendMostActiveResponse,
} from "@/mock/mock-data";
import Tabs from "./tabs";
import IncomeStatementChart from "./dashboard/income-statement-chart";
import BalanceSheetChart from "./dashboard/balance-sheet-chart";
import SymbolContext from "@/context/stock-context";
import { fetchStockOverview } from "@/api/stock-api";
import StockOverviewContext from "@/context/stock-overview-context";

export default function Dashboard() {
  const { stockSymbol } = useContext(SymbolContext);
  const { setStockOverview } = useContext(StockOverviewContext);

  // const [chartData, setChartData] = useState(null);
  const [incomeStatementChartData, setIncomeStatementChartData] =
    useState(null);
  const [balanceSheetChartData, setBalanceSheetChartData] = useState(null);

  const chartTabs = [
    { name: "TIME SERIES", content: <ChartCard /> },
    {
      name: "INCOME STATEMENT",
      content: <IncomeStatementChart chartData={incomeStatementChartData} />,
    },
    {
      name: "BALANCE SHEET",
      content: <BalanceSheetChart chartData={balanceSheetChartData} />,
    },
  ];

  const trendTabs = [
    {
      name: "GAINERS",
      content: (
        <TrendCard selectedTrend={mockMarketTrendGainersResponse.data.trends} />
      ),
    },
    {
      name: "LOSERS",
      content: (
        <TrendCard selectedTrend={mockMarketTrendLosersResponse.data.trends} />
      ),
    },
    {
      name: "MOST ACTIVE",
      content: (
        <TrendCard
          selectedTrend={mockMarketTrendMostActiveResponse.data.trends}
        />
      ),
    },
    {
      name: "MARKET INDEXES",
      content: (
        <TrendCard
          selectedTrend={mockMarketTrendMarketIndexResponse.data.trends}
        />
      ),
    },
  ];

  useEffect(() => {
    if (stockSymbol) {
      fetchStockOverview(stockSymbol).then((data) => {
        if (data) {
          setStockOverview(data);
        }
      });
    }
  }, [stockSymbol]);

  useEffect(() => {
    // setSelectedTrend(mockMarketTrendGainersResponse.data.trends);
    // setChartData(mockTimeSeriesDailyAdjust["Time Series (Daily)"]);
    setIncomeStatementChartData(
      mockCompanyIncomeStatementResponse.data.income_statement
    );
    setBalanceSheetChartData(
      mockCompanyBalanceSheetResponse.data.balance_sheet
    );
  }, []);

  return (
    <div className="flex justify-center items-center w-full">
      {/* Dashboard container */}
      <div
        className="md:h-[80rem] h-[120rem]
      w-full
      grid 
      grid-cols-1 md:grid-cols-4
      grid-rows-12
      auto-rows-fr
      gap-1 px-2 py-5
      font-quicksand text-gray-700 text-md
      "
      >
        {/* trend table */}

        <div
          className="
          col-span-1 md:col-span-4
          row-span-4 md:row-span-6
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
            <SearchSymbolBar />
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
