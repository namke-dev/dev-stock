import React from "react";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row items-center justify-start bg-black/80 text-gray-200 text-sm px-3 py-0.5 gap-5">
        <button>Stock dashboard</button>
        <button>Currenct dashboard</button>
        <button>Market trend</button>
        <button>News</button>
      </div>
    </header>
  );
}
