import {
  Search,
  ChevronDown,
  MapPinCheck,
  BriefcaseBusiness,
  Banknote,
} from "lucide-react";
import { FilterItem, FilterOptions, NavInterface } from "../_types/types";
import Jobs from "../_components/Jobs";
import Messages from "../_components/Messages";
import Hiring from "../_components/Hiring";
import Community from "../_components/Community";
import FAQ from "../_components/FAQ";
import AppliedJobs from "../_components/Applied-Jobs";

export const navLinks: NavInterface[] = [
  { id: 1, title: "Find Job", component: <Jobs /> },
  { id: 2, title: "Messages", component: <Messages /> },
  { id: 3, title: "Hiring", component: <Hiring /> },
  { id: 4, title: "Community", component: <Community /> },
  { id: 5, title: "FAQ", component: <FAQ /> },
  { id: 6, title: "AppliedJobs", component: <AppliedJobs /> },
] as const;

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
] as const;

// filter
export const filters: FilterOptions = {
  "Working Schedule": ["Full Time", "Internship", "Freelance", "Contractual"],
  "Employment Type": ["Full Day", "Flexible Schedule", "Distant Work"],
};

//  array of background colors
export const bgColors = [
  "bg-blue-100",
  "bg-purple-100",
  "bg-cyan-100",
  "bg-rose-100",
  "bg-green-100",
  "bg-orange-100",
  "bg-teal-100",
  "bg-indigo-100",
  "bg-emerald-100",
  "bg-red-100",
  "bg-yellow-100",
  "bg-pink-100",
  "bg-lime-100",
  "bg-fuchsia-100",
  "bg-sky-100",
  "bg-violet-100",
  "bg-amber-100",
  "bg-gray-100",
  "bg-stone-100",
  "bg-zinc-100",
];
