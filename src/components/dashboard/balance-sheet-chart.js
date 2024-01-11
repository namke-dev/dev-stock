import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";
import { formatAxisLabel } from "@/utils/chart-helper";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function BalanceSheetChart({ chartData }) {
  const { darkMode } = useContext(ThemeContext);
  const [chartOptions, setChartOptions] = useState({});
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const darkThemelineColors = ["#77B6EA", "#00CC00", "#888888"];
    const lightThemelineColors = ["#77B6EA", "#00CC00", "#888888"];
    const colorPalette = darkMode ? darkThemelineColors : lightThemelineColors;
    const seriesData = [
      {
        name: "TOTAL ASSETS",
        data: chartData.map((data) => data.total_assets).reverse(),
      },
      {
        name: "TOTAL EQUITY",
        data: chartData.map((data) => data.total_equity).reverse(),
      },
      {
        name: "TOTAL LIABILITIES",
        data: chartData.map((data) => data.total_liabilities).reverse(),
      },
    ];

    setChartOptions({
      series: seriesData,
      options: {
        chart: {
          type: "line",
          animations: {
            enabled: false,
          },
          toolbar: {
            autoSelected: "pan",
            show: true,
          },
          zoom: {
            enabled: true,
            type: "x",
          },
        },
        colors: colorPalette,
        stroke: {
          curve: "smooth",
        },
        grid: {
          borderColor: darkMode ? "#555555" : "#e7e7e7",
          row: {
            colors: [darkMode ? "#555555" : "#f3f3f3", "transparent"],
            opacity: 0.3,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: chartData.map((data) => data.year.toString()).reverse(),
          title: {
            style: {
              color: darkMode ? "#ffffff" : "#000000", // Adjust text color for dark mode
            },
          },
          labels: {
            style: {
              colors: darkMode ? "#ffffff" : "#000000", // Adjust label color for dark mode
            },
          },
        },
        yaxis: {
          title: {
            text: "Value (USD)",
            style: {
              color: darkMode ? "#ffffff" : "#000000", // Adjust text color for dark mode
            },
          },
          labels: {
            formatter: function (value) {
              return formatAxisLabel(value);
            },
            style: {
              colors: darkMode ? "#ffffff" : "#000000", // Adjust label color for dark mode
            },
          },
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "left",
          labels: {
            colors: darkMode ? "#ffffff" : "#000000", // Adjust legend label color for dark mode
          },
        },
        animations: {
          enabled: false,
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
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
          marker: {
            show: false,
          },
          onDatasetHover: {
            highlightDataSeries: true,
          },
          style: {
            fontSize: "14px",
          },
        },
      },
    });
  }, [chartData, darkMode]);

  useEffect(() => {
    // This useEffect will run after the component is rendered
    console.log("Options:", chartOptions.options);
    console.log("Series:", chartOptions.series);
    setDomLoaded(true);
  }, [chartOptions]);

  return (
    <div className="mixed-chart h-full w-full">
      <div className="chart-box h-full w-full">
        <div id="chart-multi-line" className=" h-full w-full">
          {typeof window !== "undefined" &&
            domLoaded &&
            chartOptions.options &&
            chartOptions.series && (
              <ReactApexChart
                type="line"
                options={chartOptions.options}
                series={chartOptions.series}
                height={"95%"}
                width={"100%"}
              />
            )}
        </div>
      </div>
    </div>
  );
}
