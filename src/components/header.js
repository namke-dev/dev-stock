"use client";
export default function Header() {
  return (
    <header className="w-full">
      <div className="flex flex-row flex-wrap items-center justify-start bg-black/80 text-gray-300 text-sm px-3 py-0.5 gap-5">
        <button>Market_trend</button>
        <button>Time_series_data</button>
      </div>
    </header>
  );
}
