import React from "react";

export default function Cart({ children }) {
  return (
    <div
      className="bg-gray-50 text-gray-800 h-full w-full rounded-md relative px-1 md:px-2 py-1 
      border border-neutral-300
      dark:border-gray-800
      dark:bg-slate-800"
    >
      {children}
    </div>
  );
}
