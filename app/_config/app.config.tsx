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
  "bg-purple-400",
  "bg-lime-300",
  "bg-cyan-400",
  "bg-teal-300",
  "bg-purple-300",
  "bg-emerald-400",
  "bg-lime-400",
  "bg-red-300",
  "bg-red-400",
  "bg-blue-300",
  "bg-blue-400",
  "bg-green-300",
  "bg-green-400",
  "bg-rose-300",
  "bg-rose-400",
  "bg-emerald-300",
  "bg-pink-300",
  "bg-pink-400",
  "bg-cyan-300",
  "bg-teal-400",
  "bg-indigo-300",
  "bg-indigo-400",
];
