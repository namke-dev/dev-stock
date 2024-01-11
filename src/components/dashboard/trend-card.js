import React, { useEffect, useState } from "react";
import TrendCardDetail from "./trend-card-detail";

export default function TrendCard({ selectedTrend }) {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <div className="h-[75%] md:h-[85%] w-full">
      <div className="flex gap-3 justify-between px-5 pb-2 text-sm font-semibold">
        <p className="flex-1">Symbol</p>
        <p className="flex-1">Exchange</p>
        <p className="flex-1 text-right">Price</p>
        <p className="flex-1 text-right">Change</p>
        <p className="flex-1 text-right">Change(%)</p>
      </div>

      <div
        className="divide-y-2 dark:divide-gray-500
        h-full overflow-y-auto custom-scrollbar"
      >
        {domLoaded &&
          selectedTrend.map((item) => {
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
