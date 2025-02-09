import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import SidebarFilter from "./Sidebar-Filter";
import Jobcard from "./ui/Job-card";
import Modal from "./Modal";
import useJobFilter from "../_hooks/useJobFilter";
import { JobInterface } from "../_types/types";

const Jobs = () => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<JobInterface | null>(null);
  const { filteredJobs, updateFilter, selectedFilters } = useJobFilter();

  const onClose = () => setIsVisible(false);

  const onClickJob = (job: JobInterface) => {
    if (!user) {
      toast.error("Please login to apply! 🥺");
      return;
    }
    setIsVisible(true);
    setSelectedJob(job);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-20 w-full overflow-scroll h-[80vh] sm:h-[70vh] bg-white p-0 sm:p-6 z-0 ">
      {/* Sidebar Filter */}
      <SidebarFilter
        selectedFilters={selectedFilters}
        updateFilter={updateFilter}
      />

      <div className="flex flex-col h-full w-full sm:w-[70%] md:w-[75%] xl:w-[90%] gap-3 sm:gap-12 z-0 ">
        <h1 className=" text-2xl sm:text-4xl text-black font-bold text-center sm:text-start">
          Recommended Jobs
          <span className="text-2xl border-2 font-medium rounded-full px-4 py-1 ml-3">
            {filteredJobs.length}
          </span>
        </h1>

        <div className="flex flex-wrap   justify-evenly  p-4 sm:p-0 gap-4 sm:gap-16 md:gap-2  w-full">
          {filteredJobs.map((job) => (
            <Jobcard key={job.id} job={job} onClickJob={onClickJob} />
          ))}
        </div>
      </div>

      {/* Apply for Job Modal */}
      {isVisible && selectedJob && user && (
        <Modal
          isVisible={isVisible}
          onClose={onClose}
          selectedJob={selectedJob}
        />
      )}
    </div>
  );
};

export default Jobs;
