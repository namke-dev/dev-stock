import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ThemeContext from "@/context/theme-context";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MultiLineChart({ chartData }) {
  const { darkMode } = useContext(ThemeContext);
  const [chartOptions, setChartOptions] = useState({});
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const darkThemelineColors = ["#77B6EA", "#00CC00", "#888888"];
    const lightThemelineColors = ["#77B6EA", "#00CC00", "#888888"];
    const colorPalette = darkMode ? darkThemelineColors : lightThemelineColors;
    const seriesData = [
      {
        name: "Revenue",
        data: chartData.map((data) => data.revenue),
      },
      {
        name: "Operating Expense",
        data: chartData.map((data) => data.operating_expense),
      },
      {
        name: "Net Income",
        data: chartData.map((data) => data.net_income),
      },
    ];

    setChartOptions({
      series: seriesData,
      options: {
        chart: {
          height: 350,
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
            type: "xy",
          },
        },
        colors: colorPalette,
        dataLabels: {
          enabled: true,
        },
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
          categories: chartData.map((data) => data.year.toString()),
          title: {
            text: "Month",
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
            text: "Temperature",
            style: {
              color: darkMode ? "#ffffff" : "#000000", // Adjust text color for dark mode
            },
          },
          // min: 5,
          // max: 40,
          labels: {
            style: {
              colors: darkMode ? "#ffffff" : "#000000", // Adjust label color for dark mode
            },
          },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
          labels: {
            colors: darkMode ? "#ffffff" : "#000000", // Adjust legend label color for dark mode
          },
        },
        animations: {
          enabled: false,
        },
        tooltip: {
          enabled: true, // Tooltips will show information about each series when hovering
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
                height={"100%"}
                width={"100%"}
              />
            )}
        </div>
      </div>
    </div>
  );
}
