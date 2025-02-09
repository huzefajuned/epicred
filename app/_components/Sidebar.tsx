import React from "react";
import UserProfile from "./User-Profile";
import { X } from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import LoginButton from "./ui/Login-Button";

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const { user } = useAuth();
  return (
    <div className="fixed inset-0 flex bg-gray-900/50 backdrop-blur-lg z-50">
      {/* Sidebar Container */}
      <div className="h-full  flex   flex-col justify-center items-center w-[80%] sm:w-[70%] bg-white shadow-lg p-5 rounded-r-2xl transform transition-transform duration-500">
        <UserProfile />
        {user ? <div className="main">{/*  */}</div> : <LoginButton />}

      </div>

      {/* show login button if no user */}

      {/* Clickable Close Area */}
      <X onClick={toggleSidebar} className="flex-1 h-full cursor-pointer p-2" />
    </div>
  );
};

export default Sidebar;
