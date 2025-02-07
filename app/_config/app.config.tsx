import {
  Search,
  ChevronDown,
  MapPinCheck,
  BriefcaseBusiness,
  Banknote,
} from "lucide-react";
import { FilterItem, NavInterface } from "../_types/types";
import Jobs from "../_components/Jobs";
import Messages from "../_components/Messages";
import Hiring from "../_components/Hiring";
import Community from "../_components/Community";
import FAQ from "../_components/FAQ";

export const navLinks:NavInterface[] = [
  { id: 1, title: "Find Job", component: <Jobs /> },
  { id: 2, title: "Messages", component: <Messages /> },
  { id: 3, title: "Hiring", component: <Hiring /> },
  { id: 4, title: "Community", component: <Community /> },
  { id: 5, title: "FAQ", component: <FAQ /> },
] as const;

export const filterList:FilterItem[] = [
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
