"use client";

import Dashboard from "@/components/dashboard";
import StockContext from "@/context/stock-context";
import ThemeContext from "@/context/theme-context";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("AAPL:NASDAQ");

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
        <Dashboard />
      </StockContext.Provider>
    </ThemeContext.Provider>
  );
}
