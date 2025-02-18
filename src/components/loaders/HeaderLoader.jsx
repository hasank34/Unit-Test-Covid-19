import React from "react";
const HeaderLoader = () => {
  return (
    <div className="flex gap-2 items-center" data-testid="header-loader">
      <div className="bg-gray-300 h-8 w-24 rounded-md animate-pulse"></div>
      <div className="bg-gray-300 h-10 w-16 rounded-md animate-pulse"></div>
    </div>
  );
};

export default HeaderLoader;
