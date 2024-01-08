import { MARKET_TREND_TYPE, PAGE_FEATURE } from "@/const/stock-option-const";
import React from "react";

export default function OptionBar() {
  return (
    <div
      className="flex flex-col items-start justify-center h-full px-2 gap-1
      text-sm "
    >
      <div className="flex flex-row">
        <p>Feature</p>
        <ul className="fex flex row gap-4 text-black ml-12">
          {Object.values(PAGE_FEATURE).map((option) => {
            return (
              <li
                key={option}
                className="rounded-lg bg-gray-100 px-2 border hover:border-black/75 hover:bg-gray-300 cursor-pointer"
              >
                {option}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex flex-row">
        <p>Market trend</p>
        <ul className="fex flex row gap-4 text-black ml-12">
          {Object.values(MARKET_TREND_TYPE).map((option) => {
            return (
              <li
                key={option}
                className="rounded-lg bg-gray-100 px-2 border hover:border-black/75 hover:bg-gray-300 cursor-pointer"
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
