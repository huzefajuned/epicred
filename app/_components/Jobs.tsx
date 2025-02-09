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
    <div className="flex flex-row gap-20 w-full overflow-scroll h-[70vh] bg-white p-6">
      {/* Sidebar Filter */}
      <SidebarFilter
        selectedFilters={selectedFilters}
        updateFilter={updateFilter}
      />

      <div className="flex flex-col h-full w-[70%] gap-12">
        <h1 className="text-4xl text-black font-bold">
          Recommended Jobs
          <span className="text-2xl border-2 font-medium rounded-full px-4 py-1 ml-3">
            {filteredJobs.length}
          </span>
        </h1>

        <div className="flex flex-wrap   justify-evenly gap-16">
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
