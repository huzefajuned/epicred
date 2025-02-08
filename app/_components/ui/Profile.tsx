import React from "react";
import { useAuth } from "../../context/AuthProvider";
import UserAvatar from "./User-Avatar";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <div className="bg-black text-white rounded-3xl p-6 w-full  shadow-lg flex flex-col gap-3 items-center ">
          <UserAvatar classname="!w-20 !h-20" />

          <h3 className="text-lg">
            Hello ,
            <span className="text-sm font-bold ml-1">{user.displayName}</span>
          </h3>
          <button className="bg-[#4FD1C5] text-white px-5 py-2 rounded-lg shadow-md hover:bg-white cursor-pointer hover:text-black transition">
            Update Your Data
          </button>

          {/* Subtext */}
          <p className="text-lg text-gray-300 text-center ">
            Update your data and find the best opportunities
          </p>
          <h2 className="text-2xl font-semibold  text-center">
            Update your data!
          </h2>
        </div>
      )}
    </>
  );
};

export default Profile;
