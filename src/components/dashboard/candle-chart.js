import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CandleChart = ({ chartData }) => {
  const { darkMode } = useContext(ThemeContext);
  console.log("Darkmode: " + darkMode);
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
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: darkMode ? "#00CC00" : "#4CAF50",
              downward: darkMode ? "#FF3333" : "#F44336",
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
            color: darkMode ? "#FFC107" : "#F15B46",
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
