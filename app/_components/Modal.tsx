import React from "react";
import { JobInterface } from "../_types/types";

const Modal = ({
  isVisible,
  onClose,
  selectedJob,
}: {
  isVisible: boolean;
  onClose: () => void;
  selectedJob: JobInterface | null;
}) => {
  if (!isVisible || !selectedJob) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
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
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Modal;
