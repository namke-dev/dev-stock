"use client";

import React, { useContext, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import SearchSymbolResult from "./search-symbol-result";
import { fetchFromApi } from "@/api/stock-api";
import StockContext from "@/context/stock-context";

export default function SearchSymbolBar() {
  const [input, setInput] = useState("");
  const [stockMatches, setStockMatches] = useState([]);
  const { setStockSymbol } = useContext(StockContext);

  const clear = () => {
    setInput("");
    setStockMatches([]);
  };

  const updateSearchResults = async () => {
    try {
      if (input) {
        const url = `search?query=${input}`;
        const response = await fetchFromApi(url);

        if (response.status === "OK") {
          const result = response.data.stock;
          setStockMatches(result);
        }
      }
    } catch (error) {
      setStockMatches([]);
    }
  };

  const handleStockSelect = (symbol) => {
    setStockSymbol(symbol);
    console.log("setStockSymbol = " + symbol);
    setStockMatches([]);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row px-2 justify-start mt-4 md:mt-2.5 h-auto w-full md:gap-4 dark:text-white/90">
        <p className="mb-1 text-sm font-semibold md:mt-3">SEARCH</p>
        <div
          className="flex items-center
          border-2 border-indigo-200 dark:border-indigo-900
          rounded-md
          relative
          z-50
          w-full
          md:max-w-[30rem]
          h-10
          dark:bg-gray-700"
        >
          <input
            type="text"
            className="mx-3 focus:outline-0 flex flex-grow bg-gray-50 dark:bg-gray-700"
            placeholder="ex: google"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setStockMatches([]);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                updateSearchResults();
              }
            }}
          />

          {/* Clear button */}
          {input && (
            <button onClick={clear} className="m-1">
              <FaTimes className="h-4 w-4 fill-gray-400" />
            </button>
          )}

          {/* Search button */}
          <button
            className="h-8 w-14 bg-indigo-400 dark:bg-indigo-800 rounded-sm flex justify-center items-center mx-[0.15rem]"
            onClick={updateSearchResults}
          >
            <FaSearch className="h-4 w-4 fill-gray-50 dark:fill-white/90" />
          </button>

          {/* Search result */}
          {input && stockMatches.length > 0 ? (
            <SearchSymbolResult
              results={stockMatches}
              onSelect={handleStockSelect}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
