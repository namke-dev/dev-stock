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
      border border-indigo-500
      text-sm
      py-2
      ${isActive ? "bg-indigo-500 text-gray-50" : "text-indigo-500"}`}
    >
      {text}
    </button>
  );
}
