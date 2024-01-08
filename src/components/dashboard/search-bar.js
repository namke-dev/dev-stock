import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="flex flex-row px-2 items-center h-full gap-4">
      <p>Search sympol</p>
      <div
        className="flex items-center
        my-4 border-2
        rounded-lg
        relative
        z-50
        w-96
        h-12"
      >
        <input
          type="text"
          className="mx-3 focus:outline-0 flex flex-grow text-gray-900"
          placeholder="Search stock, ex: google"
        />

        {/* Search button */}
        <button className="h-8 w-8 bg-gray-600 rounded-md flex justify-center items-center mx-2">
          <FaSearch className="h-4 w-4 fill-gray-200" />
        </button>
      </div>
    </div>
  );
}
