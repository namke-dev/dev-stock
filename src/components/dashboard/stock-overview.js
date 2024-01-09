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
      <div className="md:text-lg">
        <p>{companyOverview.data.symbol}</p>
        <p>
          {companyOverview.data.price}{" "}
          <span className="font-extralight text-gray-600">
            {companyOverview.data.currency}
          </span>
        </p>
      </div>
      <p className="font-thin text-sm"> {companyOverview.data.name}</p>
    </div>
  );
}
