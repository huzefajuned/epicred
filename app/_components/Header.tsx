"use client";
import Image from "next/image";
import { Settings, BellRing, MapPinHouse } from "lucide-react";
import logo from "../assets/logo.svg";
import { filterList, navLinks } from "../_config/app.config";
import SalaryRange from "./Salaray-Range";
import { FilterItem, NavInterface } from "../_types/types";
import { Dispatch, JSX, SetStateAction, useState } from "react";
import LoginButton from "./ui/Login-Button";
import { useAuth } from "../context/AuthProvider";
import UserAvatar from "./ui/User-Avatar";
import UserDropdown from "./ui/User-Dropdown";

interface HeaderProps {
  activeComponent: JSX.Element;
  setActiveComponent: Dispatch<SetStateAction<JSX.Element>>;
}

const Header = ({ activeComponent, setActiveComponent }: HeaderProps) => {
  const { user } = useAuth();
  const [visibleDropdown, setVisibleDropdown] = useState<boolean>(false);

  return (
    <div className="bg-black flex flex-col justify-around  text-white w-full ">
      {/* Top section with logo and navigation */}
      <div className="flex flex-row items-center justify-between px-12 py-4 border-b-[1px] border-gray-600">
        {/* Logo */}
        <div>
          <Image
            src={logo}
            alt="logo"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6">
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
        <div className="flex items-center gap-4">
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
                <BellRing className="" />{" "}
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
      <div className="flex  flex-row gap-7 justify-between px-16 py-6  w-full">
        {filterList.map((list: FilterItem) => (
          <div
            key={list.id}
            className="flex flex-row justify-start  items-center gap-3  border-gray-600 border-r-[1px] w-48   py-5   cursor-pointer"
          >
            <span className="text-2xl ml-2">{list.icon}</span>
            <span className="text-xl">{list.title}</span>
            <span className="ml-2">{list.icon2}</span>
          </div>
        ))}

        {/* salary range */}
        <SalaryRange />
      </div>
    </div>
  );
};

export default Header;
