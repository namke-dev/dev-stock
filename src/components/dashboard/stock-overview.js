import StockOverviewContext from "@/context/stock-overview-context";
import React, { useContext, useEffect, useState } from "react";

export default function StockOverview() {
  const { stockOverview } = useContext(StockOverviewContext);
  useEffect(() => {
    console.log(stockOverview);
  }, [stockOverview]);

  if (!stockOverview) return <div>Loading . . .</div>;

  return (
    <div
      className="flex flex-col justify-center 
      h-full w-full 
      px-2 gap-1
      "
    >
      <p className="md:text-lg font-semibold dark:text-white/90">
        {stockOverview.symbol}
      </p>
      <p className="text-green-500 text-md">
        {stockOverview.price}{" "}
        <span className="font-extralight text-gray-400">
          {stockOverview.currency}
        </span>
      </p>

      <a
        className="font-thin text-sm text-blue-600"
        href={stockOverview.company_website}
        target="_blank"
      >
        {stockOverview.name}
      </a>
      <a
        className="font-thin text-sm text-blue-600"
        href={stockOverview.company_cdp_url}
        target="_blank"
      >
        CDP: {stockOverview.company_cdp_score}
      </a>
    </div>
  );
}
