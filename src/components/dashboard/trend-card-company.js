import React from "react";

export default function TrendCardCompany({ stockDetail }) {
  return (
    <div
      className="flex gap-3 justify-between px-5
    text-sm"
    >
      <p
        className={`flex-1 font-semibold ${
          stockDetail.change_percent > 10
            ? "text-purple-500"
            : stockDetail.change_percent > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {stockDetail.symbol.split(":")[0]}
      </p>
      <p className="flex-1">{stockDetail.symbol.split(":")[1]}</p>
      <p className="flex-1 text-right">
        {parseFloat(stockDetail.price).toFixed(2)}
      </p>
      <p className="flex-1 text-right">
        {parseFloat(stockDetail.change).toFixed(2)}
      </p>
      <p
        className={`flex-1 text-right ${
          stockDetail.change_percent > 10
            ? "text-purple-500"
            : stockDetail.change_percent > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {parseFloat(stockDetail.change_percent).toFixed(2)}
      </p>
    </div>
  );
}
