import LoadingBarContext from "@/context/loading-bar-context";
import React, { useContext } from "react";

export const LoadingBar = () => {
  const { isLoading } = useContext(LoadingBarContext);
  return (
    <div
      className={`
        fixed
        transition-all 
        duration-500 z-50
        h-0.5 bg-green-500 opacity-90
      ${isLoading ? "w-full" : "w-0"} `}
    ></div>
  );
};
