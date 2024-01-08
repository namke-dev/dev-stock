import React from "react";

export default function StockOverview() {
  return (
    <div className="flex flex-col justify-center h-full px-2 gap-2">
      <div className="text-xl text-gray-700 font-semibold">GOOGLE INC.</div>
      <div className="flex flex-row justify-between mx-10 gap-3">
        <p className="text-xl text-gray-800">
          $109.90 <span className="!font-extralight text-gray-600">USD</span>
        </p>
        <p className="text-green-500 text-lg">
          2.27 <span>2.27(1.8958%)</span>
        </p>
      </div>
    </div>
  );
}
