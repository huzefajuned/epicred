"use client";
import Header from "./_components/Header";
import {
  SunMoon,
  Search,
  ChevronDown,
  MapPinCheck,
  BriefcaseBusiness,
  Banknote,
} from "lucide-react";
import logo from "../assets/logo.svg";
import { FilterItem, NavInterface } from "./_types/types";
import Jobs from "./_components/Jobs";
import Messages from "./_components/Messages";
import Hiring from "./_components/Hiring";
import Community from "./_components/Community";
import FAQ from "./_components/FAQ";
import { JSX, useState } from "react";

export const navLinks: NavInterface[] = [
  { id: 1, title: "Find Job", component: <Jobs /> },
  { id: 2, title: "Messages", component: <Messages /> },
  { id: 3, title: "Hiring", component: <Hiring /> },
  { id: 4, title: "Community", component: <Community /> },
  { id: 5, title: "FAQ", component: <FAQ /> },
];

export const filterList: FilterItem[] = [
  { id: 1, icon: <Search />, title: "Role", icon2: <ChevronDown /> },
  { id: 2, icon: <MapPinCheck />, title: "Location", icon2: <ChevronDown /> },
  {
    id: 3,
    icon: <BriefcaseBusiness />,
    title: "Job Type",
    icon2: <ChevronDown />,
  },
  { id: 4, icon: <Banknote />, title: "Salary", icon2: <ChevronDown /> },
];

export default function Home() {
  const [activeComponent, setActiveComponent] = useState<JSX.Element>(<Jobs />);

  return (
    <div className="h-screen w-screen ">
      <Header  activeComponent ={activeComponent} setActiveComponent={setActiveComponent} />

      {/* Dynamic Component Rendering */}
      <div className="h-3/4">
        {activeComponent}
      </div>
    </div>
  );
}
