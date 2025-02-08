import React from "react";
import { Star } from "lucide-react";
import { JobInterface } from "@/app/_types/types";

const RatingStar = ({ job }: { job: JobInterface }) => {
  return (
    <div className="flex items-center gap-1 text-gray-600 mt-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < Math.round(job.rating) ? "#FACC15" : "none"}
          stroke={i < Math.round(job.rating) ? "#FACC15" : "#E5E7EB"}
        />
      ))}
      <span className="text-sm">({job.reviews} Reviews)</span>
    </div>
  );
};

export default RatingStar;
