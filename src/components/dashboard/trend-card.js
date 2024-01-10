import React from "react";
import TrendCardDetail from "./trend-card-detail";

export default function TrendCard({ selectedTrend }) {
  return (
    <div
      className="
      bg-white h-full w-full rounded-md py-1 border border-neutral-300"
    >
      <div className="flex gap-3 justify-between px-5 pb-2 text-sm font-semibold">
        <p className="flex-1">Symbol</p>
        <p className="flex-1">Exchange</p>
        <p className="flex-1 text-right">Price</p>
        <p className="flex-1 text-right">Change</p>
        <p className="flex-1 text-right">Change(%)</p>
      </div>

      <div className="divide-y-2 h-[95%] overflow-y-auto custom-scrollbar">
        {selectedTrend.map((item) => {
          return (
            <div key={item.symbol}>
              <TrendCardDetail stockDetail={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
