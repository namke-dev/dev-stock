import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { timeSeriesDaily } from "@/mock/mock-time-series";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandleChart = () => {
  const [chartOptions, setChartOptions] = useState([]);

  useEffect(() => {
    const formatedData = Object.entries(
      timeSeriesDaily["Time Series (Daily)"]
    ).map(([date, values]) => ({
      x: new Date(date).getTime(),
      y: [
        parseFloat(values["1. open"]),
        parseFloat(values["2. high"]),
        parseFloat(values["3. low"]),
        parseFloat(values["4. close"]),
      ],
    }));

    setChartOptions({
      series: [
        {
          data: formatedData,
        },
      ],
      chart: {
        type: "candlestick",
        height: 350,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      zoom: {
        enabled: true,
        type: "x",
        resetIcon: {
          offsetX: -10,
          offsetY: 0,
          fillColor: "#fff",
          strokeColor: "#37474F",
        },
        selection: {
          background: "#90CAF9",
          border: "#0D47A1",
        },
      },
    });
  }, []);

  return (
    <div className="mixed-chart h-full w-full">
      {typeof window !== "undefined" && (
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="candlestick"
          width={"98%"}
          height={"98%"}
        />
      )}
    </div>
  );
};

export default CandleChart;
