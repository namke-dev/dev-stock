import React from "react";

export default function ChartFilter({ text, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-8 m-2 border-1 
      rounded-md
      flex items-center justify-center
      cursor-pointer
      ${
        isActive
          ? "bg-indigo-600 border-indigo-700 text-gray-100"
          : "text-indigo-300 border-indigo-300"
      }`}
    >
      {text}
    </button>
  );
}
