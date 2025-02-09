"use client";
import { useState, useMemo } from "react";
import jobsData from "../_data/fake-data.json";
import { selectedFiltersInterface } from "../_types/types";

const useJobFilter = () => {
  const [selectedFilters, setSelectedFilters] =
    useState<selectedFiltersInterface>({
      "Working Schedule": null,
      "Employment Type": null,
    });

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      return (
        (!selectedFilters["Working Schedule"] ||
          job.working_schedule === selectedFilters["Working Schedule"]) &&
        (!selectedFilters["Employment Type"] ||
          job.employment_type === selectedFilters["Employment Type"])
      );
    });
  }, [selectedFilters]);

  const updateFilter = (filterCategory: string, value: string | null) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterCategory]: prev[filterCategory] === value ? null : value,
    }));
  };

  return { filteredJobs, updateFilter, selectedFilters };
};

export default useJobFilter;
