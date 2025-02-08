import React, { useState } from "react";
import jobs from "../Data/fake-data.json";
import { JobInterface } from "../_types/types";
import Modal from "./Modal";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import SidebarFilter from "./Sidebar-Filter";
import Jobcard from "./ui/Job-card";

const Jobs = () => {
  const { user } = useAuth();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<JobInterface | null>(null);

  // on close  user modal
  const onClose = () => {
    setIsVisible(false);
  };

  // on apply for job
  const onClickJob = (job: JobInterface) => {
    if (!user) {
      toast.error("please login to apply! 🥺");
    }
    setIsVisible(true);
    setSelectedJob(job);
  };

  return (
    <div className="flex flex-row gap-20 w-full overflow-scroll h-[70vh] bg-white  p-6">
      {/*  filter sidebar  */}
      <SidebarFilter />

      <div className="flex flex-col  h-full  w-[70%]  gap-12 ">
        <h1 className="text-4xl text-black font-bold">
          Recommended Jobs
          <span className="text-2xl border-2 font-medium rounded-full px-4 py-1 ml-3">
            {jobs.length}
          </span>
        </h1>

        <div className="flex flex-wrap justify-between gap-16">
          {jobs.map((job: JobInterface) => (
            <Jobcard key={job.id} job={job} onClickJob={onClickJob} />
          ))}
        </div>
      </div>

      {/* apply for a job : -  MODAL */}
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
