import React from "react";

export default function CompanyDetail() {
  const detailListType = {
    // symbol: "Symbol",
    // type: "Type",
    // price: "Price",
    previous_close: "Previous close",
    change: "Change",
    change_percent: "Change percent",
    pre_or_post_market: "Pre/Post market",
    pre_or_post_market_change: "Pre/Post market change",
    pre_or_post_market_change_percent: "Pre/Post market change percent",
    last_update_utc: "Last Update utc",
  };

  const financialListType = {
    income_statement: "Company Income Statement",
    balance_sheet: "Company Balance Sheet",
    cash_flow: "Company Cash Flow",
  };

  return (
    <>
      <ul
        className="flex flex-col 
        divide-y-2 
        justify-between 
        w-full h-full
        text-gray-600
        px-5
        py-2
        "
      >
        {Object.keys(detailListType).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center py-2"
            >
              <span>{detailListType[item]}</span>
              <span>{"null"}</span>
            </li>
          );
        })}

        {Object.keys(financialListType).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center py-2"
            >
              <a href="/" className="text-blue-600 underline">
                {financialListType[item]}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
