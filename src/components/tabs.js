import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full h-full">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer py-0.5 px-4 dark:text-white/70 ${
              activeTab === index
                ? "border-b-2 border-indigo-500  dark:text-white"
                : "text-gray-400 dark:hover:text-gray-50 hover:text-gray-900"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div
        className="w-full h-[92%]
      mt-2"
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
