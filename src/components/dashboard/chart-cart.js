import { CHART_FILTER } from "@/const/stock-option-const";
import React, { useContext, useEffect, useState } from "react";
import ChartFilter from "./chart-filter";
import CandleChart from "./candle-chart";
import SymbolContext from "@/context/stock-context";
import { fetchStockTimeSeriesDaily } from "@/api/stock-api";
import { mockTimeSeriesDailyAdjust } from "@/mock/mock-time-series";

export default function ChartCard() {
  const [filter, setFilter] = useState("1M");
  const [domLoaded, setDomLoaded] = useState(false);
  const { stockSymbol } = useContext(SymbolContext);
  // stockSymbol
  // const [chartData, setChartData] = useState(null);
  const [chartData, setChartData] = useState(
    mockTimeSeriesDailyAdjust["Time Series (Daily)"]
  );

  useEffect(() => {
    const functionName = "TIME_SERIES_DAILY_ADJUSTED";

    if (stockSymbol) {
      fetchStockTimeSeriesDaily(stockSymbol, functionName).then((data) => {
        if (data) {
          setChartData(data["Time Series (Daily)"]);
        }
      });
    }

    setDomLoaded(true);
  }, [stockSymbol]);

  if (!chartData) return <div>Loading . . .</div>;
  return (
    <div className="h-full w-full flex flex-col">
      <div className="flex flex-row w-full h-auto text-lg font-semibold justify-between items-center pl-2">
        {/* chart option filter */}
        <ul
          className=" flex flex-row flex-wrap 
          z-40 md:gap-2
          items-center 
          justify-end
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
      <div className="h-full w-full py-1">
        {domLoaded && <CandleChart chartData={chartData} />}
      </div>
    </div>
  );
}
