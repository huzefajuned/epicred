import React from "react";
import Profile from "./ui/Profile";
import { filters } from "../_config/app.config";
import { selectedFiltersInterface } from "../_hooks/useJobFilter";

const SidebarFilter = ({
  selectedFilters,
  updateFilter,
}: {
  selectedFilters: selectedFiltersInterface;
  updateFilter: (filterCategory: string, value: string | null) => void;
}) => {
  return (
    <div className="filter h-full w-[20%]">
      {/* Profile */}
      <Profile />

      {/* Filters */}
      <div className="py-4 w-full max-w-md">
        <h2 className="text-3xl text-black mb-4 mt-2">Filters</h2>

        {Object.entries(filters).map(([category, options]) => (
          <div key={category} className="mb-5">
            <p className="text-lg font-medium text-gray-600 mb-4">{category}</p>
            <div className="flex flex-col gap-2">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center gap-2 text-gray-700 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedFilters[category] === option}
                    onChange={() => updateFilter(category, option)}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
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
