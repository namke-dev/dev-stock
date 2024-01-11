"use client";

import Dashboard from "@/components/dashboard";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ThemeSwitch from "@/components/theme-switch";
import StockContext from "@/context/stock-context";
import ThemeContext from "@/context/theme-context";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [stockSymbol, setStockSymbol] = useState("AAPL:NASDAQ");

  return (
    <main className="flex flex-col items-center">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Header />
          <Dashboard />
          <ThemeSwitch />
          <Footer />
        </StockContext.Provider>
      </ThemeContext.Provider>
    </main>
  );
}
