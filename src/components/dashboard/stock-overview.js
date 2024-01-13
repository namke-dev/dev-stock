import StockOverviewContext from "@/context/stock-overview-context";
import React, { useContext } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

export default function StockOverview() {
  const { stockOverview } = useContext(StockOverviewContext);

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
      <div
        className={`flex flex-row text-md gap-1 items-center ${
          stockOverview.price >= stockOverview.previous_close
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        <span className="text-2xl">
          {stockOverview.price >= stockOverview.previous_close ? (
            <FaCaretUp />
          ) : (
            <FaCaretDown />
          )}
        </span>
        <span>{stockOverview.price} </span>
        <span className="font-extralight text-gray-400">
          {stockOverview.currency}
        </span>
      </div>
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
        CDP Score: {stockOverview.company_cdp_score}
      </a>
    </div>
  );
}
