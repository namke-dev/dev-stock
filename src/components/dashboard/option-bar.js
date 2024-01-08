import { MARKET_TREND_TYPE, PAGE_FEATURE } from "@/const/stock-option-const";
import React from "react";

export default function OptionBar() {
  return (
    <div
      className="flex flex-col items-start justify-center h-full px-2 gap-1
      text-sm "
    >
      <div className="flex flex-col md:flex-row w-full">
        <p className="flex justify-start mb-2 md:m-0">Feature</p>
        <ul className="flex flex-row flex-wrap gap-2 text-gray-700 md:ml-12">
          {Object.values(PAGE_FEATURE).map((option) => {
            return (
              <li
                key={option}
                className="rounded-lg bg-gray-100 px-2 border hover:border-black/85 hover:bg-gray-200 cursor-pointer"
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row w-full mb-2 md:mb-0">
        <p className="flex justify-start mt-2 mb-1 md:m-0">Market trend</p>
        <ul className="flex flex-row flex-wrap gap-2 text-gray-700 md:ml-12">
          {Object.values(MARKET_TREND_TYPE).map((option) => {
            return (
              <li
                key={option}
                className="rounded-lg bg-gray-100 px-2 border hover:border-black/85 hover:bg-gray-200 cursor-pointer"
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
