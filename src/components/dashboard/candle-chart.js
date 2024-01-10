import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandleChart = ({ chartData }) => {
  const [chartOptions, setChartOptions] = useState({});
  const [domLoaded, setDomLoaded] = useState(false);

  console.log("chartData");
  console.log(chartData);
  if (!chartData) return;

  useEffect(() => {
    const formatedData = Object.entries(chartData).map(([date, values]) => ({
      x: new Date(date).getTime(),
      y: [
        parseFloat(values["1. open"]),
        parseFloat(values["2. high"]),
        parseFloat(values["3. low"]),
        parseFloat(values["4. close"]),
      ],
    }));

    const formatedVolumeData = Object.entries(chartData).map(
      ([date, values]) => ({
        x: new Date(date).getTime(),
        y: parseFloat(values["6. volume"]),
      })
    );

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
    });
    setDomLoaded(true);
  }, [chartData]);

  return (
    <div className="mixed-chart h-full w-full">
      {typeof window !== "undefined" && domLoaded && (
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
