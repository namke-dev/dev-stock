import React from "react";

export default function Cart({ children }) {
  return (
    <div
      className="
        bg-white 
        h-full w-full 
        rounded-md 
        relative 
        p-8
        border-2"
    >
      {children}
    </div>
  );
}
