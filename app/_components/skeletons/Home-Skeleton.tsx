import React from "react";

const HomeSkeleton = () => {
  return (
    <div className="h-screen w-screen bg-white overflow-hidden animate-pulse flex flex-col">
      {/* Main Header Skeleton */}
      <div className="h-36 w-full flex flex-col gap-3 items-center shadow-md bg-gray-100">
        {/* Top Header */}
        <div className="h-20 w-full bg-gray-200 flex items-center justify-between px-4 sm:px-6 rounded-md shadow-sm">
          <div className="h-12 w-40 sm:w-52 bg-gray-300 rounded-full" />{" "}
          {/* Logo */}
          {/* Nav Links (Hidden on Mobile) */}
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-6 w-16 sm:w-24 bg-gray-300 rounded-md"
              />
            ))}
          </div>
          <div className="h-10 w-24 sm:w-28 bg-gray-300 rounded-md" />{" "}
          {/* Button */}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col sm:flex-row p-4 sm:p-6 gap-6 flex-1">
        {/* Sidebar Skeleton */}
        <div className="w-full sm:w-1/4 h-40 sm:h-full bg-gray-100 rounded-lg shadow-sm" />

        {/* Cards Section */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 flex-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-40 sm:h-96 w-full sm:w-64 bg-gray-100 rounded-lg shadow-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSkeleton;
