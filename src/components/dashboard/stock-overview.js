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
      <p className="md:text-lg font-semibold">{companyOverview.data.symbol}</p>
      <p className="text-green-500 text-lg">
        {companyOverview.data.price}{" "}
        <span className="font-extralight text-gray-400">
          {companyOverview.data.currency}
        </span>
      </p>

      <a
        className="font-thin text-sm text-blue-600"
        href={companyOverview.data.company_website}
        target="_blank"
      >
        {companyOverview.data.name}
      </a>
      <a
        className="font-thin text-sm text-blue-600"
        href={companyOverview.data.company_cdp_url}
        target="_blank"
      >
        CDP: {companyOverview.data.company_cdp_score}
      </a>
    </div>
  );
}
