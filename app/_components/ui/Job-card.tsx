import { JobInterface } from "@/app/_types/types";
import React from "react";
import { Bookmark, MapPin } from "lucide-react";
import { bgColors } from "@/app/_config/app.config";
import RatingStar from "./Rating-Star";

const Jobcard = ({
  job,
  onClickJob,
}: {
  job: JobInterface;
  onClickJob: (job: JobInterface) => void;
}) => {
  // Assign a random background color based on the job ID (consistent for each job)
  const randomBgColor = bgColors[job.id % bgColors.length];

  return (
    <div
      key={job.id}
      className={`flex flex-col justify-between gap-5 p-2 rounded-xl shadow-md border border-gray-200 w-full md:w-[35%] lg:w-[25%] relative`}
    >
      <div className={`${randomBgColor} rounded-lg  p-4 h-full flex flex-col gap-1  `}>
        {/* Bookmark Icon */}
        <div className="flex flex-row justify-between gap-3">
          <button className="text-black hover:text-black">
            <Bookmark size={30} />
          </button>
          <button className=" text-black hover:text-black bg-white rounded-full p-2">
            <Bookmark size={25} />
          </button>
        </div>

        {/* Job Title */}
        <h3 className="text-xl text-black font-semibold mt-2">
          {job.job_title}
        </h3>

        {/* Rating & Reviews */}
        <RatingStar job={job} />

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-600 text-sm mt-2 ">
          <MapPin size={16} />
          {job.location}
        </div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-2 mt-3 ">
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
      </div>

      {/* Salary & Details Button */}
      <div className="flex items-center justify-between gap-4 mt-4 border-t">
        <span className="text-sm font-bold text-gray-800">${job.salary}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClickJob(job);
          }}
          className="bg-black text-white px-5 py-2 mt-2 rounded-full text-sm font-medium hover:bg-red-400"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Jobcard;
