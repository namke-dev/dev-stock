"use client";

import Dashboard from "@/components/dashboard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { LoadingBar } from "@/components/loading-bar";
import ThemeSwitch from "@/components/theme-switch";
import LoadingBarContext from "@/context/loading-bar-context";
import SymbolContext from "@/context/stock-context";
import StockOverviewContext from "@/context/stock-overview-context";
import ThemeContext from "@/context/theme-context";
import { mockCompanyOverviewResponse } from "@/mock/mock-data";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState(null);

  // const [stockSymbol, setStockSymbol] = useState("NFLX:NASDAQ");
  // const [stockOverview, setStockOverview] = useState(null);

  const [stockOverview, setStockOverview] = useState(
    mockCompanyOverviewResponse.data
  );
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="flex flex-col items-center">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <SymbolContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <StockOverviewContext.Provider
            value={{ stockOverview, setStockOverview }}
          >
            <LoadingBarContext.Provider value={{ isLoading, setIsLoading }}>
              <LoadingBar />
              <Header />
              <ThemeSwitch />
              <Dashboard />
              <Footer />
            </LoadingBarContext.Provider>
          </StockOverviewContext.Provider>
        </SymbolContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
}
