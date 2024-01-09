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
      <div className="md:text-lg font-semibold">
        {companyOverview.data.symbol}
      </div>
      <span>{companyOverview.data.name}</span>
      <p>
        {companyOverview.data.company_city +
          " " +
          companyOverview.data.company_street_address}
      </p>
      <p className="">
        $109.90 <span className="font-extralight text-gray-600">USD</span>
      </p>
    </div>
  );
}
