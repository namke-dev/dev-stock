import React from "react";

export default function CompanyDetail() {
  const detailListType = {
    symbol: "Symbol",
    name: "Name",
    // price: "Price",
    // company_country: "Country",
    // company_state: "State",
    // company_city: "City",
    company_cdp_score: "CDP Score",
    company_cdp_url: "CDP URL",
    avg_volume: "Avg volume",
    company_pe_ratio: "P/E ratio",
    company_market_cap: "Market cap",
    company_dividend_yield: "Dividend yield",
    company_ceo: "CEO",
    company_employees: "Num of employees",
    company_founded_date: "Founded Date",
    company_website: "Website",
    company_street_address: "Address",
  };

  const financialListType = {
    income_statement: "Income statement",
    balance_sheet: "Balance sheet",
    cash_flow: "Cash flow",
  };

  return (
    <>
      <ul
        className="flex flex-col 
        divide-y-0
        justify-between 
        w-full h-auto
        text-gray-600
        px-2
        py-0
        "
      >
        {Object.keys(detailListType).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center py-1 text-sm"
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
              className="flex-1 flex justify-between items-center py-1 text-sm"
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
