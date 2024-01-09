import { mockCompanyOverviewResponse } from "@/mock/mock-data";
import React, { useState } from "react";

export default function StockOverview() {
  const [companyOverview, setCompanyOverview] = useState(
    mockCompanyOverviewResponse
  );

  return (
    <div
      className="flex flex-col justify-center 
      h-full w-full 
      px-2 gap-1
      "
    >
      <p className="font-thin text-sm text-gray-600">
        {companyOverview.data.name}
      </p>
      <p className="md:text-lg font-semibold">{companyOverview.data.symbol}</p>
      <p className="text-green-500 text-lg">
        {companyOverview.data.price}{" "}
        <span className="font-extralight text-gray-400">
          {companyOverview.data.currency}
        </span>
      </p>
    </div>
  );
}
