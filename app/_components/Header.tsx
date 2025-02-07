"use client";
import Image from "next/image";
import { SunMoon } from "lucide-react";
import logo from "../assets/logo.svg";
import { filterList, navLinks } from "../_utils/common";
import SalaryRange from "./Salaray-Range";
import { NavInterface } from "../_types/types";
import React from "react";

interface HeaderProps {
  activeComponent: React.FC | null; // Allow null for default state
  setActiveComponent: (component: React.FC | null) => void; // Accepts a component function
}


const Header = ({ activeComponent, setActiveComponent }: HeaderProps) => {
  return (
    <div className="bg-black flex flex-col justify-around  text-white w-full ">
      {/* Top section with logo and navigation */}
      <div className="flex flex-row items-center justify-between px-16 py-6 border-b-[1px] border-gray-600">
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
          {navLinks.map((nav: NavInterface) => (
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
          <span className="">Dummy Location</span>
        </div>

        {/*   Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 cursor-pointer">
            <SunMoon className="" />

            <SunMoon className="" />

            <SunMoon className="" />
          </div>
        </div>
      </div>

      {/* Bottom section with filters */}
      <div className="flex  flex-row gap-7 justify-between px-16 py-6  w-full">
        {filterList.map((list) => (
          <div
            key={list.id}
            className="flex flex-row justify-start  items-center gap-3  border-gray-600 border-r-[1px] w-48   py-5   cursor-pointer"
          >
            <span className="text-2xl ml-2">{React.createElement( list?.icon)}</span>
            <span className="text-xl">{list?.title}</span>
            <span className="ml-2">{ React.createElement(list?.icon2)}</span>
          </div>
        ))}

        {/* salary range */}
        <SalaryRange />
      </div>
    </div>
  );
};

export default Header;
