import React, { useEffect, useState } from "react";
import { JobInterface } from "../_types/types";
import jobList from "../Data/fake-data.json"; // Ensure this is correctly imported

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState<JobInterface[]>([]);

  useEffect(() => {
    // Retrieve applied job IDs and convert them to numbers
    const appliedJobIds: number[] = JSON.parse(
      localStorage.getItem("appliedJobs") || "[]"
    ).map(Number);

    // Fetch the full job details from jobList (or API)
    const filteredJobs = jobList.filter((job) =>
      appliedJobIds.includes(job.id)
    );

    setAppliedJobs(filteredJobs);
  }, []);

  return (
    <div className="h-screen w-full bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Applied Jobs</h1>

      {appliedJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-80 bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-500 text-lg">
            You have not applied for any jobs yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {appliedJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {job.job_title}
              </h2>
              <p className="text-gray-600">
                <span className="font-semibold">Company:</span> {job.company}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Location:</span> {job.location}
              </p>
              <p className="text-gray-700 font-bold mt-2">
                💰 ${job.salary} / year
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {job.employment_type}
                </span>
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {job.seniority_level}
                </span>
                {job.remote && (
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Remote
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;
