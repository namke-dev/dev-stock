"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
  const [isLargeDevice, setIsLargeDevice] = useState(true);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsLargeDevice(window.innerWidth > 768);
    };

    // Initial check
    checkWindowSize();

    // Event listener for window resize
    window.addEventListener("resize", checkWindowSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <header>
      <div className="flex flex-row flex-wrap items-center justify-start bg-black/80 text-gray-300 text-sm px-3 py-0.5 gap-5">
        <button>Market_trend</button>
        <button>Time_series_data</button>
      </div>
    </header>
  );
}
