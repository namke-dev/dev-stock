import React from "react";
import Cart from "./cart";
import OptionBar from "./dashboard/option-bar";
import SearchBar from "./dashboard/search-bar";
import StockOverview from "./dashboard/stock-overview";
import CompanyDetail from "./dashboard/company-detail";
import ChartCard from "./dashboard/chart-cart";

export default function Dashboard() {
  return (
    <div className="flex justify-center items-center">
      {/* Dashboard container */}
      <div
        className="h-[84rem] md:h-[96.7vh] 
      w-full max-w-[80rem]
      grid 
      grid-cols-1 md:grid-cols-3
      grid-row-10 md:grid-row-12
      auto-rows-fr
      gap-1 px-2 py-2
      font-quicksand text-gray-700 text-md"
      >
        {/* Option Bar */}
        <div
          className="
        col-span-1 md:col-span-3
        row-span-1
        flex justify-center items-center"
        >
          <Cart>
            <OptionBar />
          </Cart>
        </div>

        {/* Search bar */}
        <div
          className="
        col-span-1 md:col-span-3
        row-span-1
        flex justify-center items-center"
        >
          <Cart>
            <SearchBar />
          </Cart>
        </div>

        {/* DashBoard chart */}
        <div
          className="col-span-1 md:col-span-2
        row-span-3 md:row-span-9"
        >
          {/* <Cart> */}
          <ChartCard />
          {/* </Cart> */}
        </div>

        {/* Dashboard Company stock overview */}
        <div className="row-span-1 md:row-span-2">
          <Cart>
            <StockOverview />
          </Cart>
        </div>

        {/* Dashboard Company Infor */}
        <div className="row-span-3 md:row-span-7">
          <Cart>
            <CompanyDetail />
          </Cart>
        </div>
      </div>
    </div>
  );
}
