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
    setChartOptions({
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "Average High & Low Temperature",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.3,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            text: "Month",
          },
        },
        yaxis: {
          title: {
            text: "Temperature",
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
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
