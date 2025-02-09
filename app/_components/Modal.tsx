import React, { useEffect, useState } from "react";
import { JobInterface } from "../_types/types";
import toast from "react-hot-toast";

const Modal = ({
  isVisible,
  onClose,
  selectedJob,
}: {
  isVisible: boolean;
  onClose: () => void;
  selectedJob: JobInterface | null;
}) => {
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      // Check if the job has already been applied for
      const appliedJobs = JSON.parse(
        localStorage.getItem("appliedJobs") || "[]"
      );
      setHasApplied(appliedJobs.includes(selectedJob.id));
    }
  }, [selectedJob]);

  const handleApply = () => {
    if (!selectedJob) return;

    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs") || "[]");

    if (!appliedJobs.includes(selectedJob.id)) {
      appliedJobs.push(selectedJob.id);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
      setHasApplied(true);
      toast.success("Application submitted successfully!");
      onClose();
    } else {
      toast.error("You have already applied for this job.");
      onClose();
    }
  };

  if (!isVisible || !selectedJob) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4 z-50">
      <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Job Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {selectedJob.job_title}
        </h2>
        <p className="text-gray-600 mb-4">
          <span className="font-semibold">Company:</span> {selectedJob.company}
        </p>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <span>📍</span>
          <span>{selectedJob.location}</span>
        </div>

        {/* Salary */}
        <div className="text-lg font-bold text-gray-900 mt-2 mb-4">
          💰 ${selectedJob.salary} / year
        </div>

        {/* Job Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
            {selectedJob.employment_type}
          </span>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
            {selectedJob.seniority_level}
          </span>
          {selectedJob.remote && (
            <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
              Remote
            </span>
          )}
        </div>

        {/* Apply Button */}
        <button
          className={`w-full mt-6 py-3 rounded-lg transition font-semibold ${
            hasApplied
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={handleApply}
          disabled={hasApplied}
        >
          {hasApplied ? "Already Applied" : "Apply Now"}
        </button>
      </div>
    </div>
  );
};

export default Modal;
