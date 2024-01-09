"use client";

import React, { Component } from "react";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class CandleChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  }

  render() {
    return (
      <div className="mixed-chart h-full w-full">
        {typeof window !== "undefined" && (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width="100%"
            height="100%"
          />
        )}
      </div>
    );
  }
}

export default CandleChart;
