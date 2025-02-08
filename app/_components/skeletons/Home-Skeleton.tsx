import React from "react";

const HomeSkeleton = () => {
  return (
    <div className="h-screen w-screen bg-white overflow-hidden animate-pulse">
      {/* Main Header Skeleton */}
      <div className="h-16 w-full bg-gray-200 flex items-center px-4">
        <div className="h-10 w-10 bg-gray-300 rounded-full" /> {/* Logo */}
        <div className="flex-1" />
        <div className="h-6 w-20 bg-gray-300 rounded mr-4" /> {/* Link */}
        <div className="h-6 w-20 bg-gray-300 rounded mr-4" /> {/* Link */}
        <div className="h-10 w-24 bg-gray-300 rounded" /> {/* Button */}
      </div>

      {/* Secondary Header Skeleton */}
      <div className="h-20 w-full bg-gray-200 flex items-center justify-between px-4 mt-2">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-16 w-1/5 bg-gray-300 rounded" />
        ))}{" "}
        {/* Five Cards */}
      </div>

      {/* Main Content Skeleton */}
      <div className="flex p-4 space-x-4">
        {/* Sidebar Skeleton */}
        <div className="w-1/4 h-full bg-gray-200 rounded" />

        {/* Cards Section */}
        <div className="w-3/4 space-y-4">
          <div className="h-40 w-full bg-gray-200 rounded" />
          <div className="h-40 w-full bg-gray-200 rounded" />
          <div className="h-40 w-full bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
