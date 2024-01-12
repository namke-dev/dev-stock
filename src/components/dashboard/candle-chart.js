import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";
import { formatAxisLabel } from "@/utils/chart-helper";
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

    const dateKeys = Object.keys(chartData);

    const lastDate = new Date(dateKeys[0]);
    const startDate = new Date(dateKeys[dateKeys.length - 1]);

    const tmpDate = new Date(lastDate);
    tmpDate.setDate(tmpDate.getDate() - 20);
    const firstDate = new Date(Math.min(tmpDate, startDate));

    setChartOptions({
      series: [
        {
          name: "candlestick",
          data: formatedPriceData,
        },
        {
          name: "volume",
          data: formatedVolumeData.map((data) => ({
            x: data.x,
            y: data.y,
            fillColor: data.color, // Use fillColor property to set the color
          })),
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
        },
        title: {
          text: "STOCK PRICE TIME SERIES",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "18px",
            fontWeight: "bold",
            fontFamily: undefined,
            color: darkMode ? "#999999" : "#263238",
          },
        },
        legend: {
          show: false,
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
          title: {
            text: "Price (USD)",
            style: {
              color: darkMode ? "#999999" : "#222222", // Adjust text color for dark mode
            },
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
        grid: {
          borderColor: darkMode ? "#555555" : "#e7e7e7",
          row: {
            colors: [darkMode ? "#555555" : "#f3f3f3", "transparent"],
            opacity: 0.1,
          },
        },
        tooltip: {
          enabled: true,
          followCursor: true,
          theme: darkMode ? "dark" : "light",
          x: {
            show: true,
            format: "dd MMM yy",
          },
          y: {
            show: true,
            formatter: function (value) {
              return formatAxisLabel(value, 2);
            },
          },
          marker: {
            show: false,
          },
          interceptor: {
            enabled: false,
          },
        },
      },

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
        legend: {
          show: false,
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
          title: {
            text: "Volumne",
            style: {
              color: darkMode ? "#999999" : "#222222", // Adjust text color for dark mode
            },
          },
          labels: {
            formatter: function (value) {
              return formatAxisLabel(value);
            },
            style: {
              colors: darkMode ? "#999999" : "#222222",
            },
          },
          forceNiceScale: true,
        },
        grid: {
          borderColor: darkMode ? "#555555" : "#e7e7e7",
          row: {
            colors: [darkMode ? "#555555" : "#f3f3f3", "transparent"],
            opacity: 0.1,
          },
        },
        tooltip: {
          enabled: true,
          followCursor: true,
          theme: darkMode ? "dark" : "light",
          x: {
            show: true,
            format: "dd MMM yy",
          },
          y: {
            show: true,
            formatter: function (value) {
              return formatAxisLabel(value, 2);
            },
          },
          marker: {
            show: true,
          },
          interceptor: {
            enabled: false,
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
              series={chartOptions.series}
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
