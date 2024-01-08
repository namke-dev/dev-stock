import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex flex-row px-2 items-center h-full gap-4">
      <p>Search sympol</p>
      <div
        className="flex items-center
        my-4 border-2
        rounded-md
        relative
        z-50
        w-96
        h-10"
      >
        <input
          type="text"
          className="mx-3 focus:outline-0 flex flex-grow text-gray-900"
          placeholder="Search stock, ex: google"
        />

        {/* Search button */}
        <button className="h-8 w-10 bg-gray-400 rounded-md flex justify-center items-center mx-1">
          <FaSearch className="h-4 w-4 fill-gray-100" />
        </button>
      </div>
    </div>
  );
}
