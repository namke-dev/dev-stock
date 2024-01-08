import React from "react";
import Cart from "./cart";

export default function Dashboard() {
  return (
    // Dashboard container
    <div
      className="h-[94vh] w-full
      grid 
      grid-cols-1 md:grid-cols-3
      grid-row-8 md:grid-row-7
      auto-rows-fr
      gap-2 px-10
      py-5
      font-quicksand
      text-indigo-600 !text-lg"
    >
      {/* Dashboard header */}
      <div
        className="
        col-span-1 md:col-span-3
        row-span-1
        flex justify-center items-center"
      >
        <Cart>
          <p>quick access</p>
        </Cart>
      </div>

      {/* Dashboard header */}
      <div
        className="
        col-span-1 md:col-span-3
        row-span-1
        flex justify-center items-center"
      >
        <Cart>
          <p className="">search bar</p>
        </Cart>
      </div>

      {/* DashBoard chart */}
      <div
        className="col-span-2
        row-span-5"
      >
        <Cart>
          <p>chart</p>
        </Cart>
      </div>

      {/* Dashboard Company stock overview */}
      <div className="row-span-2  md:row-span-1">
        <Cart>
          <p>trend</p>
        </Cart>
      </div>

      {/* Dashboard Company Infor */}
      <div className="row-span-5 md:row-span-4">
        <Cart>
          <p>financial infor</p>
        </Cart>
      </div>
    </div>
  );
}
