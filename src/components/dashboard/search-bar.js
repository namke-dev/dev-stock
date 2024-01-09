"use client";

import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { fetchFromApi } from "../../api/stock-api";
import SearSymbolResult from "./search-symbol-result";
import { mockSearchResponse } from "@/mock/mock-data";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [stockMatches, setStockMatches] = useState([]);

  const clear = () => {
    setInput("");
    setStockMatches([]);
  };

  const updateBestMatches = async () => {
    console.log("updateBestMatches");
    try {
      if (input) {
        // const url = `search?query=${input}`;
        // const searchResult = await fetchFromApi(url);
        const searchResult = mockSearchResponse;
        const result = searchResult.data.stock;
        setStockMatches(result);
      }
    } catch (error) {
      setStockMatches([]);
      console.log("Search bar" + error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row px-2 justify-start h-1/2 w-full md:gap-4">
        <p className="mb-1 text-sm font-semibold md:mt-2">Search symbol</p>
        <div
          className="flex items-center
          border-2 border-indigo-200
          rounded-md
          relative
          z-50
          w-full
          md:max-w-[30rem]
          h-10"
        >
          <input
            type="text"
            className="mx-3 focus:outline-0 flex flex-grow text-gray-900 bg-gray-50"
            placeholder="ex: google"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                updateBestMatches();
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
            className="h-8 w-14 bg-indigo-400 rounded-sm flex justify-center items-center mx-[0.15rem]"
            onClick={updateBestMatches}
          >
            <FaSearch className="h-4 w-4 fill-gray-50" />
          </button>

          {/* Search result */}
          {input && stockMatches.length > 0 ? (
            <SearSymbolResult results={stockMatches} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
