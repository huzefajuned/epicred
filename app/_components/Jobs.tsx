import React, { useState } from "react";
import { Bookmark, Star, MapPin } from "lucide-react";
import jobs from "../Data/fake-data.json";
import Profile from "./Profile";
import { JobInterface } from "../_types/types";
import Modal from "./Modal";

type FilterOptions = {
  [key: string]: string[];
};

const filters: FilterOptions = {
  "Working Schedule": ["Full Time", "Internship", "Freelance", "Contractual"],
  "Employment Type": ["Full Day", "Flexible Schedule", "Distant Work"],
};
const Jobs = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const onClose = () => {
    setIsVisible(false);
  };
  return (
    <div className="flex flex-row gap-20 w-full overflow-scroll h-[70vh]  p-6">
      {/*  */}
      <div className="filter p-2   w-[20%]">
        {/* profile */}
        <Profile />
        {/* filter */}

        <div className=" py-4 w-full max-w-md">
          <h2 className="text-3xl  text-black  mb-4 mt-2">Filters</h2>

          {Object.entries(filters).map(([category, options]) => (
            <div key={category} className="mb-5">
              <p className="text-lg font-medium text-gray-600 mb-4">
                {category}
              </p>
              <div className="flex flex-col gap-2">
                {options.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center gap-2 text-gray-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
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

      <div className="flex flex-col   w-[70%]   gap-12 ">
        <h1 className="text-5xl text-black">Recommended Jobs</h1>

        <div className="flex flex-wrap justify-between gap-16">
          {jobs.map((job: JobInterface) => (
            <div
              key={job.id}
              className="flex flex-col bg-white p-10 rounded-xl shadow-md border border-gray-200 w-full md:w-[35%] lg:w-[26%] relative"
            >
              {/* Bookmark Icon */}
              <button className="absolute top-4 right-4 text-black hover:text-black">
                <Bookmark size={20} />
              </button>

              {/* Job Title */}
              <h3 className="text-xl text-black font-semibold mt-2">
                {job.job_title}
              </h3>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-1 text-gray-600 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < job.rating ? "#FACC15" : "#E5E7EB"}
                    stroke="none"
                  />
                ))}
                <span className="text-sm">({job.reviews} Reviews)</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-gray-600 text-sm mt-2">
                <MapPin size={16} />
                {job.location}
              </div>

              {/* Job Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-black px-3 py-1 rounded-full border text-sm font-medium">
                  {job.employment_type}
                </span>
                <span className="bg-black px-3 py-1 rounded-full border text-sm font-medium">
                  {job.seniority_level}
                </span>
                {job.remote && (
                  <span className="bg-black px-3 py-1 rounded-full border text-sm font-medium">
                    Remote
                  </span>
                )}
              </div>

              {/* Salary & Details Button */}
              <div className="flex items-center justify-between gap-4 mt-4 border-t pt-4">
                <span className="text-sm font-bold truncate text-gray-800">
                  ${job.salary}
                </span>
                <button
                  onClick={() => setIsVisible(true)}
                  className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isVisible && <Modal isVisible={isVisible} onClose={onClose} />}
    </div>
  );
};

export default Jobs;
