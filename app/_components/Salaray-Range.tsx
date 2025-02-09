import { useState } from "react";

const SalaryRange = () => {
  const [salary, setSalary] = useState<number>(600);

  return (
    <div className="flex flex-col items-center justify-center  gap-2 cursor-pointer   border-[1px]  sm:border-none  rounded-xl sm:rounded-none   border-gray-600   p-2 h-12 sm:h-20  w-40 sm:w-44 ">
      <span className="hidden sm:flex  text-sm sm:text-xl ml-1">
        Salary Range
      </span>
      <input
        type="range"
        min="600"
        max="1200"
        value={salary}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSalary(Number(e.target.value))
        }
        className="w-full cursor-pointer h-[2px] sm:h-1 "
      />
      <div className="flex justify-between gap-2 w-full px-0 sm:px-2 text-xs sm:text-sm ">
        <span>$600</span>-<span>$1200</span>
      </div>
    </div>
  );
};

export default SalaryRange;
