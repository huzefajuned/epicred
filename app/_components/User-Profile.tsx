import React from "react";
import { useAuth } from "../context/AuthProvider";
import Image from "next/image";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="flex justify-center items-center min-h-screen p-4 gap-5">
      <div className="shadow-lg rounded-lg p-6 max-w-sm w-full text-center border border-gray-200">
        <Image
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full shadow-md border"
        />
        <h2 className="mt-4 text-3xl font-semibold text-black">
          {user?.displayName || "User Name"}
        </h2>
        <p className="text-gray-400">{user?.email || "user@example.com"}</p>
      </div>
    </div>
  );
};

export default UserProfile;
