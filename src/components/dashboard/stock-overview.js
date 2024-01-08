import React from "react";

export default function StockOverview() {
  return (
    <div
      className="flex flex-col justify-center 
      h-full w-full 
      px-2 gap-2
      "
    >
      <div className="md:text-base font-semibold">Symbol: GOOGL</div>
      <p>Company name: GOOGLE INC.</p>
      <p className="">
        $109.90 <span className="font-extralight text-gray-600">USD</span>
      </p>
    </div>
  );
}
