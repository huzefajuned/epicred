"use client";
import Image from "next/image";
import { Settings, BellRing, MapPinHouse, Menu } from "lucide-react";
import { filterList, navLinks } from "../_config/app.config";
import SalaryRange from "./Salaray-Range";
import { FilterItem, HeaderProps, NavInterface } from "../_types/types";
import { useState } from "react";
import LoginButton from "./ui/Login-Button";
import { useAuth } from "../context/AuthProvider";
import UserAvatar from "./ui/User-Avatar";
import UserDropdown from "./ui/User-Dropdown";
import Jobs from "./Jobs";

const Header = ({ activeComponent, setActiveComponent }: HeaderProps) => {
  const { user } = useAuth();
  const [visibleDropdown, setVisibleDropdown] = useState<boolean>(false);

  return (
    <div className="bg-black flex flex-col justify-between sm:justify-between  text-white w-full ">
      {/* Top section with logo and navigation */}
      <div className="flex flex-row items-center justify-between sm:justify-between   px-2 py-1 sm:px-12 sm:py-4 border-b-[1px] border-gray-600">
        {/* Logo */}

        <div
          className="p-1 flex flex-row items-center  gap-4 sm:gap-0 
        "
        >
          <Menu className="flex   sm:hidden " size={32} />

          <Image
            onClick={() => setActiveComponent(<Jobs />)}
            src="/assets/logo.svg"
            alt="logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex  gap-2 sm:gap-6">
          {navLinks
            .filter((nav: NavInterface) => nav.id !== 6) // Exclude id 6
            .map((nav: NavInterface) => (
              <button
                key={nav.id}
                onClick={() => setActiveComponent(nav.component)}
                className={`${
                  nav.id == 1 || activeComponent == nav.component
                    ? " border-b-white border-b-2"
                    : ""
                } hover:text-blue-500 font-medium p-4 border-b-2 border-black`}
              >
                {nav.title}
              </button>
            ))}
        </nav>

        {/* Location */}
        <div className="hidden sm:flex items-center gap-4">
          <MapPinHouse /> <span className=""> New York, NY</span>
        </div>

        {/*   Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="flex justify-between  items-center gap-4 cursor-pointer px-4 py-3">
            {/* auth user */}
            {user ? (
              <>
                <UserAvatar classname="" />
                <Settings
                  className=""
                  onClick={() => setVisibleDropdown(true)}
                />
                <BellRing className="" />
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
        {visibleDropdown && (
          <UserDropdown
            setVisibleDropdown={setVisibleDropdown}
            setActiveComponent={setActiveComponent}
          />
        )}
      </div>

      {/* Bottom section with filters */}
      <div className="flex   flex-row  items-center   overflow-x-scroll  gap-2 sm:gap-7 justify-between px-2 py-2 sm:px-16 sm:py-6   w-full">
        {filterList.map((list: FilterItem) => (
          <div
            key={list.id}
            className="flex flex-row items-center gap-1 sm:gap-3 px-2 py-3 sm:py-5 w-36 sm:w-48 md:w-52 cursor-pointer 
            border-[1px]  rounded-xl sm:rounded-none  border-gray-600 sm:border-r-[1px] sm:border-t-0 sm:border-l-0 sm:border-b-0"
          >
            <span className=" text-sm sm:text-2xl ml-1 sm:ml-2">
              {list.icon}
            </span>
            <span className=" text-sm sm:text-xl truncate">{list.title}</span>
            <span className="">{list.icon2}</span>
          </div>
        ))}

        {/* salary range */}
        <SalaryRange />
      </div>
    </div>
  );
};

export default Header;
