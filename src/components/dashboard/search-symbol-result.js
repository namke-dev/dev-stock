import React from "react";

export default function SearchSymbolResult({ results, onSelect }) {
  return (
    <ul
      className="absolute top-10 
        h-auto max-h-64  w-full
        overflow-y-scroll 
        border border-gray-300
        rounded-md 
        pl-1
        py-1
        custom-scrollbar
        z-10
        dark:bg-gray-700 dark:border-gray-700
        bg-gray-50
        "
    >
      {results &&
        results.map((item) => {
          return (
            <li
              key={item.symbol}
              className="cursor-pointer p-4 m-1 flex items-center justify-between rounded-md
              dark:hover:bg-indigo-600 hover:bg-indigo-200"
              onClick={() => onSelect(item.symbol)}
            >
              <span>{item.name}</span>
              <span>{item.symbol}</span>
            </li>
          );
        })}
    </ul>
  );
}
