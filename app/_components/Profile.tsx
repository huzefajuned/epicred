import Image from "next/image";
import React from "react";
import avatar from "../assets/user.avif";

const Profile = () => {
  return (
    <div className="bg-black text-white rounded-3xl p-6 w-full  shadow-lg flex flex-col gap-3 items-center ">
      {/* User Avatar */}
      <Image
        src={avatar}
        alt="user-avatar"
        height={100}
        width={100}
        className="rounded-full border-2 border-gray-600 h-20 w-20 "
      />

      {/* Heading */}
      <h2 className="text-2xl font-semibold  text-center">
        Update your data!
      </h2>

      {/* Subtext */}
      <p className="text-lg text-gray-300 text-center ">
        Update your data and find the best opportunities
      </p>

      {/* Button */}
      <button className="bg-[#4FD1C5] text-white px-5 py-2 rounded-lg shadow-md hover:bg-white cursor-pointer hover:text-black transition">
        Update Your Data
      </button>
    </div>
  );
};

export default Profile;
