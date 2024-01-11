import React, { useEffect, useState } from "react";
import TrendCardDetail from "./trend-card-detail";

export default function TrendCard({ selectedTrend }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="h-[75%] md:h-[85%] w-full">
      <div
        className="flex gap-3 justify-between 
        px-5 pb-2 text-sm 
        dark:text-white/90
        border-b border-gray-200 dark:border-gray-700"
      >
        <p className="flex-1">Symbol</p>
        <p className="flex-1">Exchange</p>
        <p className="flex-1 text-right">Price</p>
        <p className="flex-1 text-right">Change</p>
        <p className="flex-1 text-right">Change(%)</p>
      </div>

      <div
        className="
        h-full overflow-y-auto custom-scrollbar"
      >
        {domLoaded &&
          selectedTrend.map((item) => {
            return (
              <div
                key={item.symbol}
                className="dark:even:bg-white/10 even:bg-black/10"
              >
                <TrendCardDetail stockDetail={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
