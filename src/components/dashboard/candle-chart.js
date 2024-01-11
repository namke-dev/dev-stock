import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CandleChart = ({ chartData }) => {
  const { darkMode } = useContext(ThemeContext);
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
      ([date, values]) => {
        const isGreen =
          parseFloat(values["4. close"]) >= parseFloat(values["1. open"]);
        const color = isGreen ? "#00CC00" : "#F44336";

        return {
          x: new Date(date).getTime(),
          y: parseFloat(values["6. volume"]),
          isGreen,
          color,
        };
      }
    );

    function formatAxisLabel(value) {
      const absValue = Math.abs(value);

      if (absValue >= 1e9) {
        return (value / 1e9).toFixed(0) + "B";
      } else if (absValue >= 1e6) {
        return (value / 1e6).toFixed(0) + "M";
      } else if (absValue >= 1e3) {
        return (value / 1e3).toFixed(0) + "K";
      } else {
        return value.toFixed(0);
      }
    }
    // set default on-chart filter
    const lastDate = new Date(Object.keys(chartData)[0]);
    const tmpDate = new Date(lastDate);
    tmpDate.setDate(tmpDate.getDate() - 20);
    const lastKeyDate = new Date(Object.keys(chartData).slice(-1)[0]);
    const firstDate = new Date(Math.max(tmpDate, lastKeyDate));

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
            show: true,
          },
          zoom: {
            enabled: true,
            type: "xy",
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
          labels: {
            style: {
              colors: darkMode ? "#999999" : "#222222",
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
          labels: {
            formatter: function (value) {
              return value.toFixed(0);
            },
            style: {
              colors: darkMode ? "#999999" : "#222222",
            },
          },
          forceNiceScale: true,
        },
      },
      seriesBar: [
        {
          name: "volume",
          data: formatedVolumeData.map((data) => ({
            x: data.x,
            y: data.y,
            fillColor: data.color, // Use fillColor property to set the color
          })),
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
              min: firstDate.getTime(),
              max: lastDate.getTime(),
            },
            fill: {
              color: darkMode ? "#FFFFFF" : "#000000",
              opacity: 0.15,
            },
            stroke: {
              color: darkMode ? "#222222" : "#0D47A1",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "80%",
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
          labels: {
            style: {
              colors: darkMode ? "#999999" : "#222222",
            },
          },
        },
        yaxis: {
          labels: {
            show: true,
            formatter: function (value) {
              return formatAxisLabel(value, darkMode);
            },
            style: {
              colors: darkMode ? "#999999" : "#222222",
            },
          },
        },
      },
    });

    setDomLoaded(true);
  }, [chartData, darkMode]);

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
