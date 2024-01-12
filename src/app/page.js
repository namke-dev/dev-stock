"use client";

import Dashboard from "@/components/dashboard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import StockContext from "@/context/stock-context";
import StockOverviewContext from "@/context/stock-overview-context";
import ThemeContext from "@/context/theme-context";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState("NFLX:NASDAQ");
  const [stockOverview, setStockOverview] = useState(null);

  return (
    <main className="flex flex-col items-center">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <StockOverviewContext.Provider
            value={{ stockOverview, setStockOverview }}
          >
            <Header />
            <ThemeSwitch />
            <Dashboard />
            <Footer />
          </StockOverviewContext.Provider>
        </StockContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
}
