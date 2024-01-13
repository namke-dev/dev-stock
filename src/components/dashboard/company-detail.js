import StockOverviewContext from "@/context/stock-overview-context";
import { formatAxisLabel } from "@/utils/chart-helper";
import React, { useContext } from "react";

export default function CompanyDetail() {
  const { stockOverview } = useContext(StockOverviewContext);
  const detailListType = {
    previous_close: "Previous close",
    year_low: "Year low",
    year_high: "Year high",
    volume: "Volume",
    primary_exchange: "Primary exchange",
    last_update_utc: "Last update",
    avg_volume: "Avg volume",
    company_pe_ratio: "P/E ratio",
    company_market_cap: "Market cap",
    company_dividend_yield: "Dividend yield",

    company_ceo: "CEO",
    company_employees: "Num of employees",
    company_founded_date: "Founded Date",
    company_city: "City",
    company_street_address: "Address",
  };
  if (!stockOverview) return <div>Loading . . .</div>;

  return (
    <>
      <ul
        className="flex flex-col 
        justify-between 
        w-full h-auto
        text-gray-600
        dark:text-white/85
        py-0
        "
      >
        {Object.keys(detailListType).map((item) => {
          return (
            <li
              key={item}
              className="flex-1 flex justify-between items-center py-1.5 px-3 text-sm even:bg-black/10 dark:even:bg-white/10"
            >
              <span className="font-semibold dark:text-white/80">
                {detailListType[item]}
              </span>
              <span>
                {stockOverview[item] >= 1000
                  ? formatAxisLabel(stockOverview[item], 2)
                  : stockOverview[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
