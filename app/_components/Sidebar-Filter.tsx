import React from "react";
import Profile from "./ui/Profile";
import { filters } from "../_config/app.config";
import { selectedFiltersInterface } from "../_types/types";

const SidebarFilter = ({
  selectedFilters,
  updateFilter,
}: {
  selectedFilters: selectedFiltersInterface;
  updateFilter: (filterCategory: string, value: string | null) => void;
}) => {
  return (
    <div className="h-full w-full sm:w-[20%]  z-40  p-1 sm:p-0 bg-white">
      {/* sticky top-0 sm:relative */}
      {/* Profile */}
      <Profile />

      {/* Filters */}
      <div className="py-1 sm:py-4 w-full max-w-md">
        <h2 className=" text-2xl sm:text-3xl text-black  mb-1 sm:mb-4 mt-0 sm:mt-2">
          Filters
        </h2>

        {Object.entries(filters).map(([category, options]) => (
          <div key={category} className=" mb-1 sm:mb-5">
            <p className="text-md  sm:text-lg  text-gray-700 mb-[1px] sm:mb-4">
              {category}
            </p>
            <div className="flex flex-row justify-between sm:flex-col flex-wrap sm:flex-nowrap  p-2 sm:p-0 gap-1 sm:gap-2">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex flex-wrap sm:flex-nowrap items-center  gap-1 sm:gap-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[category] === option}
                    onChange={() => updateFilter(category, option)}
                    className="  h-3 w-3 sm:w-4 sm:h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarFilter;
