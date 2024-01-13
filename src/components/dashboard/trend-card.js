import React, { useEffect, useState } from "react";
import TrendCardDetail from "./trend-card-detail";

export default function TrendCard({ selectedTrend }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="h-[95%] md:h-[95%] w-full">
      <div
        className="flex gap-3 justify-between 
        px-5 pb-2 text-xs font-semibold
        dark:text-white/70
        border-b border-gray-200 dark:border-gray-700"
      >
        <p className="flex-1">SYMBOL</p>
        <p className="flex-1">EXCHANGE</p>
        <p className="flex-1 text-right">PRICE</p>
        <p className="flex-1 text-right">CHANGE</p>
        <p className="flex-1 text-right">CHANGE (%)</p>
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
                className="dark:even:bg-white/5 even:bg-black/5"
              >
                <TrendCardDetail stockDetail={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
