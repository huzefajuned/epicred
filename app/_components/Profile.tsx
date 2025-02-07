import React from "react";
import { useAuth } from "../context/AuthProvider";
import LoginButton from "./ui/Login-Button";
import UserAvatar from "./ui/User-Avatar";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-black text-white rounded-3xl p-6 w-full  shadow-lg flex flex-col gap-3 items-center ">
      {/* User Avatar */}
      <UserAvatar classname="!w-20 !h-20" />

      {/* Heading */}
      <h2 className="text-2xl font-semibold  text-center">Update your data!</h2>

      {/* Subtext */}
      <p className="text-lg text-gray-300 text-center ">
        Update your data and find the best opportunities
      </p>

      {user ? (
        <button className="bg-[#4FD1C5] text-white px-5 py-2 rounded-lg shadow-md hover:bg-white cursor-pointer hover:text-black transition">
          Update Your Data
        </button>
      ) : (
        <LoginButton />
      )}
      {/* Button */}
    </div>
  );
};

export default Profile;
