import StockContext from "@/context/stock-context";
import ThemeContext from "@/context/theme-context";
import React, { useContext } from "react";

export default function SearSymbolResult({ results }) {
  const { darkMode } = useContext(ThemeContext);
  const { setStockSymbol } = useContext(StockContext);

  return (
    <ul
      className={`absolute top-10 rounded-md 
        h-auto  w-full
        overflow-y-scroll 
        border-2
        custom-scrollbar
        z-50
    ${
      darkMode
        ? "bg-gray-900 border-gray-800 custom-scrollbar-dark"
        : "bg-gray-50  border-neutral-300"
    }`}
    >
      {results &&
        results.map((item) => {
          return (
            <li
              key={item.symbol}
              className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md
          ${darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200"}`}
              onClick={() => {
                console.log(item.symbol);
                setStockSymbol(item.symbol);
              }}
            >
              <span>{item.name}</span>
              <span>{item.symbol}</span>
            </li>
          );
        })}
    </ul>
  );
}
