import React from "react";
import UserProfile from "./User-Profile";
import { X } from "lucide-react";

const Sidebar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="fixed inset-0 flex bg-gray-900/50 backdrop-blur-lg z-50">
      {/* Sidebar Container */}
      <div className="h-full w-[80%] sm:w-[70%] bg-white shadow-lg p-5 rounded-r-2xl transform transition-transform duration-500">
        <UserProfile />
      </div>
      {/* Clickable Close Area */}
      <X onClick={toggleSidebar} className="flex-1 h-full cursor-pointer p-2" />
    </div>
  );
};

export default Sidebar;
