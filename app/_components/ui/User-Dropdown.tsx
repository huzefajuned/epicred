import { useAuth } from "@/app/context/AuthProvider";
import React, { Dispatch, JSX, SetStateAction } from "react";
import AppliedJobs from "../Applied-Jobs";
import UserProfile from "../User-Profile";

interface UserDropdownInterface {
  setVisibleDropdown: Dispatch<SetStateAction<boolean>>;
  setActiveComponent: Dispatch<SetStateAction<JSX.Element>>;
}
const UserDropdown = ({
  setVisibleDropdown,
  setActiveComponent,
}: UserDropdownInterface) => {
  const { logout } = useAuth();
  return (
    <div
      className="fixed inset-1 z-50 bg-transparent bg-opacity-15  flex justify-center items-center px-4"
      onClick={() => setVisibleDropdown(false)}
    >
      <div
        className="bg-white mt-2 absolute right-12 top-20 p-5 shadow-lg rounded-lg w-48"
        // onClick={(e) => e.stopPropagation()}
      >
        <ul className="text-gray-700">
          <li
            onClick={() => setActiveComponent(<UserProfile />)}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
          >
            Profile
          </li>
          <li
            onClick={() => setActiveComponent(<AppliedJobs />)}
            className="p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
          >
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
