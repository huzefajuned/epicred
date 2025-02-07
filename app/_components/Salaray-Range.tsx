import { useState } from "react";

const SalaryRange = () => {
  const [salary, setSalary] = useState<number>(600);

  return (
    <div className="flex flex-col items-start gap-2 cursor-pointer">
      <span className="text-xl ml-1">Salary Range</span>
      <input
        type="range"
        min="600"
        max="1200"
        value={salary}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSalary(Number(e.target.value))
        }
        className="w-full cursor-pointer"
      />
      <div className="flex justify-between w-full px-2 text-sm">
        <span>$600</span>
        <span>$1200</span>
      </div>
    </div>
  );
};

export default SalaryRange;
