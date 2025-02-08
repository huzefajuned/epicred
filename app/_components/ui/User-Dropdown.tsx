import { useAuth } from "@/app/context/AuthProvider";
import React, { Dispatch, SetStateAction } from "react";

const UserDropdown = ({ setVisibleDropdown }: { setVisibleDropdown:  Dispatch<SetStateAction<boolean>> }) => {
  const { logout } = useAuth();
  return (
    <div
      className="fixed inset-1 bg-transparent bg-opacity-15  flex justify-center items-center px-4"
      onClick={() => setVisibleDropdown(false)}
    >
      <div
        className="bg-white mt-2 absolute right-12 top-20 p-5 shadow-lg rounded-lg w-48"
        // onClick={(e) => e.stopPropagation()}
      >
        <ul className="text-gray-700">
          <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
            Profile
          </li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg">
            Applied Jobs
          </li>
          <li
            onClick={logout}
            className="p-2 hover:bg-red-400 text-red-600 hover:text-white cursor-pointer font-bold rounded-lg"
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDropdown;
