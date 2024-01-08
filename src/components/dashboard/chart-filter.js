import React from "react";

export default function ChartFilter({ text, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-6 m-2 border-1 
      rounded-md
      flex items-center justify-center
      cursor-pointer
      border border-indigo-500
      text-sm
      ${isActive ? "bg-indigo-500 text-gray-50" : "text-indigo-500"}`}
    >
      {text}
    </button>
  );
}
