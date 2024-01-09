import React from "react";
import TrendCardCompany from "./trend-card-company";

export default function TrendCard({ selectedTrend }) {
  return (
    <div
      className="
      bg-white h-full w-full rounded-md py-1 border border-neutral-300
      overflow-y-auto custom-scrollbar"
    >
      <div className="flex gap-3 justify-between px-5 pb-2">
        <p className="flex-1">Symbol</p>
        <p className="flex-1">Exchange</p>
        <p className="flex-1 text-right">Price</p>
        <p className="flex-1 text-right">Change</p>
        <p className="flex-1 text-right">Change(%)</p>
      </div>

      <div className="divide-y-2">
        {selectedTrend.map((item) => {
          console.log(item);
          return (
            <div key={item.symbol}>
              <TrendCardCompany stockDetail={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
