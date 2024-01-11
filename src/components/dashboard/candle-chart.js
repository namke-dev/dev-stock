import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CandleChart = ({ chartData }) => {
  const [chartOptions, setChartOptions] = useState({});
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const formatedPriceData = Object.entries(chartData).map(
      ([date, values]) => ({
        x: new Date(date).getTime(),
        y: [
          parseFloat(values["1. open"]),
          parseFloat(values["2. high"]),
          parseFloat(values["3. low"]),
          parseFloat(values["4. close"]),
        ],
      })
    );

    const formatedVolumeData = Object.entries(chartData).map(
      ([date, values]) => ({
        x: new Date(date).getTime(),
        y: parseFloat(values["6. volume"]),
      })
    );

    setChartOptions({
      series: [
        {
          name: "candlestick",
          data: formatedPriceData,
        },
      ],
      options: {
        chart: {
          type: "candlestick",
          id: "candles",
          toolbar: {
            autoSelected: "pan",
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: "#00CC00",
              downward: "#FF3333",
            },
          },
        },
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            formatter: function (value) {
              // Format the y-axis labels to a fixed number of decimal places
              return value.toFixed(0);
            },
          },
          forceNiceScale: true, // Ensure that the y-axis labels are nicely rounded
        },
      },
      seriesBar: [
        {
          name: "volume",
          data: formatedVolumeData,
        },
      ],
      optionsBar: {
        chart: {
          type: "bar",
          brush: {
            enabled: true,
            target: "candles",
          },
          selection: {
            enabled: true,
            xaxis: {
              min: new Date("1 Jan 2023").getTime(),
              max: new Date("10 Jan 2023").getTime(),
            },
            fill: {
              color: "#ccc",
              opacity: 0.4,
            },
            stroke: {
              color: "#0D47A1",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
            color: "#F15B46",
          },
        },
        stroke: {
          width: 0,
        },
        xaxis: {
          type: "datetime",
          axisBorder: {
            offsetX: 13,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
        },
      },
    });

    setDomLoaded(true);
  }, [chartData]);

  return (
    <div className="mixed-chart h-full w-full">
      <div className="chart-box h-full w-full">
        <div id="chart-candlestick" className=" h-2/3 w-full">
          {typeof window !== "undefined" && domLoaded && (
            <ReactApexChart
              options={chartOptions.options}
              series={chartOptions.series}
              type="candlestick"
              height={"100%"}
              width={"100%"}
            />
          )}
        </div>
        <div id="chart-bar" className=" h-1/3 w-full">
          {typeof window !== "undefined" && domLoaded && (
            <ReactApexChart
              options={chartOptions.optionsBar}
              series={chartOptions.seriesBar}
              type="bar"
              height={"100%"}
              width={"100%"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CandleChart;
