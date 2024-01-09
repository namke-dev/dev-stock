import { CHART_FILTER } from "@/const/stock-option-const";
import React, { useEffect, useState } from "react";
import ChartFilter from "./chart-filter";
import CandleChart from "./candle-chart";

export default function ChartCard() {
  const [chartData, setChartData] = useState(null);
  const [filter, setFilter] = useState("1M");
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  function convertUnixTimestampToDate(date) {
    return new Date(date * 1000).toLocaleDateString();
  }

  const formData = (data) => {
    return;
    data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestampToDate(data.t[index]),
      };
    });
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div>
        <ul
          className=" flex flex-row flex-wrap 
          z-40 md:gap-2
          items-center 
          justify-start
          md:justify-end"
        >
          {Object.values(CHART_FILTER).map((item) => {
            return (
              <li key={item}>
                <ChartFilter
                  text={item}
                  isActive={filter === item}
                  onClick={() => {
                    setFilter(item);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Only render chart when all dom is loaded */}
      <div className="h-full w-full py-3">{domLoaded && <CandleChart />}</div>
    </div>
  );
}
