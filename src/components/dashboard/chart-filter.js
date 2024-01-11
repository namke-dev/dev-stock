import React from "react";

export default function ChartFilter({ text, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-auto h-6
      md:w-16 md:h-7
      p-1.5 m-1 md:p-2 md:m-2 border-1 
      rounded-sm
      flex items-center justify-center
      cursor-pointer
      border border-indigo-500 dark:border-indigo-700
      text-sm
      font-thin
      py-2

      ${
        isActive
          ? "bg-indigo-500 text-gray-50"
          : "text-indigo-700 dark:text-indigo-300 dark:bg-black/10 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-white/80"
      }`}
    >
      {text}
    </button>
  );
}
