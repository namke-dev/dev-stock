import React from "react";
import Cart from "./cart";

export default function Header() {
  return (
    <header>
      <div className="flex flex-row items-center justify-start bg-black/80 text-white gap-4 px-5">
        <button>btn1</button>
        <button>btn2</button>
        <button>btn3</button>
        <button>btn4</button>
      </div>
    </header>
  );
}
