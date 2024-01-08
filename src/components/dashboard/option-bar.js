import { MARKET_TREND_TYPE, PAGE_FEATURE } from "@/const/stock-option-const";
import React from "react";

export default function OptionBar() {
  return (
    <div
      className="flex flex-col items-start justify-center h-full px-2 gap-1
      text-sm md:text-base"
    >
      <div className="flex flex-col md:flex-row w-full mb-2 md:mb-0 md:items-center">
        <p
          className="flex justify-start 
          mt-2 mb-1 md:m-0
          font-semibold
          pb-1"
        >
          Market trend
        </p>
        <ul className="flex flex-row flex-wrap gap-2 md:gap-3 text-gray-700 md:ml-9">
          {Object.values(MARKET_TREND_TYPE).map((option) => {
            return (
              <li
                key={option}
                className="rounded-md bg-gray-100 px-2 
                border border-black/30 
                hover:text-gray-50 hover:bg-gray-600 
                cursor-pointer"
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
