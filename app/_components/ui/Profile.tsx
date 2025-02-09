import React from "react";
import { useAuth } from "../../context/AuthProvider";
import UserAvatar from "./User-Avatar";

const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      {user && (
        <div className="bg-black  hidden  md:hidden lg:flex max-h-[288px] text-white rounded-2xl w-full p-5  shadow-lg  flex-col gap-3 items-center ">
          <UserAvatar classname="!w-20 !h-20" />
          <h2 className="text-2xl font-semibold  text-center">
            Update your data!
          </h2>

          <h3 className="text-lg">
            Hello ,
            <span className="text-sm font-bold ml-1">{user.displayName}</span>
          </h3>

          <button className="bg-[#4FD1C5] text-white px-5 py-2 rounded-lg shadow-md hover:bg-white cursor-pointer hover:text-black transition">
            Update Your Data
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
